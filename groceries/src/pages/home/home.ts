import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ToastController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";
  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Shrimp",
      quantity: 3
    },
    {
      name: "Sugar",
      quantity: 1
    },
  ]


  removeItem = (obj) => {
    const toast = this.toastCtrl.create({
        message: `Removing Item - ${obj.name}`,
        duration: 1000
      }

    );
    toast.present();
    const isMatch = (item) => item.name === obj.name;
    let index = this.items.findIndex(isMatch);
    console.log(index);
    this.items.splice(index, 1);

  }

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

}
