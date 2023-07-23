import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ToastController} from "ionic-angular";
import {AlertController} from 'ionic-angular';

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

  addItem = (obj) => {
    this.showPrompt();
  }
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

  showPrompt = async () => {
    const prompt = this.alertCtrl.create({
      title: 'Add Groceries',
      message: "Add an item and quantity to be added to the list",
      inputs: [
        {
          name: 'name',
          placeholder: 'item'
        },
        {
          name: 'quantity',
          placeholder: 'quantity'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Save clicked', data);
            this.items.push(data);
          }
        }
      ]
    });
    prompt.present();
  }

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

}
