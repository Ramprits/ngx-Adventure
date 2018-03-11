import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from "@angular/forms";
import { ICustomer } from "@app/customer/customer";

import "rxjs/add/operator/debounceTime";
import { CustomerService } from "@app/customer/customer.service";

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get("email");
  const confirmControl = c.get("confirmEmail");
  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }
  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { match: true };
}

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
      return { range: true };
    }
    return null;
  };
}
@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"]
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup;
  customer: ICustomer = {
    name: "",
    email: "",
    mobile: ""
  };
  emailMessage: string;

  get addresses(): FormArray {
    return <FormArray>this.customerForm.get("addresses");
  }

  constructor(private fb: FormBuilder, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: [this.customer.name, [Validators.required, Validators.minLength(3)]],
      email: [this.customer.email, [Validators.required]],
      mobile: [this.customer.mobile, [Validators.required]]
    });
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      name: "Jack",
      email: "Harkness@outlook.com",
      mobile: "9867405720"
    });
  }

  Onsave(event: ICustomer) {
    alert("Hello");
    this.customerService.AddCustomer(event).subscribe(data => {
      return data;
    });
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.customerForm.get("phone");
    if (notifyVia === "text") {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }
}
