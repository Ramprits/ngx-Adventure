import { Component, OnInit } from "@angular/core";

import { environment } from "@env/environment";
import { pageAnimation } from "@app/shared/animation/animation.motion";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  animations: [pageAnimation]
})
export class AboutComponent implements OnInit {
  version: string = environment.version;

  constructor() {}

  ngOnInit() {}
}
