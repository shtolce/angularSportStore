import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
@Component({
  selector:'App-cartSummary',
  templateUrl:'cartSummary.component.html'
})
export class CartSummaryComponent {
  constructor(public cart:Cart){};
}
