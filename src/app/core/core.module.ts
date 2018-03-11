import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { RouteReuseStrategy, RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { ShellComponent } from "./shell/shell.component";
import { HeaderComponent } from "./shell/header/header.component";
import { RouteReusableStrategy } from "./route-reusable-strategy";
import { AuthenticationService } from "./authentication/authentication.service";
import { AuthenticationGuard } from "./authentication/authentication.guard";
import { I18nService } from "./i18n.service";
import { HttpService } from "./http/http.service";
import { HttpCacheService } from "./http/http-cache.service";
import { ApiPrefixInterceptor } from "./http/api-prefix.interceptor";
import { ErrorHandlerInterceptor } from "./http/error-handler.interceptor";
import { CacheInterceptor } from "./http/cache.interceptor";
import { CommentService } from "@app/comment/comment.service";
import { CustomerService } from "@app/customer/customer.service";
import { CommentResolveService } from "@app/comment/comment.resolve.service";
import { HeaderInterceptor, LogInterceptor, AuthInterceptor } from "@app/core/http/httpHeader.interceptor";

@NgModule({
  imports: [CommonModule, HttpClientModule, TranslateModule, NgbModule, RouterModule],
  declarations: [HeaderComponent, ShellComponent],
  providers: [
    CommentResolveService,
    CustomerService,
    CommentService,
    AuthenticationService,
    AuthenticationGuard,
    I18nService,
    HttpCacheService,
    ApiPrefixInterceptor,
    ErrorHandlerInterceptor,
    CacheInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HttpClient,
      useClass: HttpService
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
