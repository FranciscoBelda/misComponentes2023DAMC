import { Injectable } from '@angular/core';
import {ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastCtrl: ToastController) { }

  async cargarToast(message: string,
                    duration: number,
                    color: string){
    const toast =
      await this.toastCtrl.create(
      {
        message,
        duration,
        cssClass: 'custom-toast',
        position: 'bottom',
        icon: 'logo-octocat',
        animated: true,
        buttons: [
          {
            text: 'Dismiss',
            role: 'cancel'
          }
        ]
      }
    );
    await toast.present();
  }
}
