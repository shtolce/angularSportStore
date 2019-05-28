import{Injectable} from "@angular/core";
import{Cart} from "./cart.model";
@Injectable()
export class Order{
  public name1: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: string;
  public country: string;
  public shipped: boolean = false;
  constructor(public cart:Cart){}
  public static clear(){
    this.id = null;
    this.name1 = this.address = this.city = null;
    this.state = this.zip = this.country = null;
    this.shipped = false;
    this.cart.clear();

  }


}
