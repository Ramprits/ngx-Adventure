import { AddressType } from "@app/customer/addressType.enum";

export interface Customer {
  customerId?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  sendCatalog?: boolean;
  addressType?: AddressType;
  street1?: string;
  street2?: string;
  city?: string;
  state?: string;
  zip?: string;
}
