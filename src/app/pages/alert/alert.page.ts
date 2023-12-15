import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo: string = '';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async mostrarAlert() {
    const alert = await this.alertCtrl.create(
      {
        header: 'Título del Alert',
        subHeader: 'Subtítulo del alert',
        message: 'Esto es una alerta',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log("Cancelar");
            }
          },
          {
            text: 'Ok',
            handler: () => {
              console.log('Ok.')
            }
          }
        ]
      }
    );
    await alert.present();
  }

  async mostrarTitulo() {
    const alert = await this.alertCtrl.create(
      {
        header: 'Alert con Input',
        subHeader: 'Escribe el título',
        inputs: [
          {
            name: 'nombre',
            type: 'text',
            placeholder: 'Nombre'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              console.log('Cancelar pulsado.')
            }
          },
          {
            text: 'Ok',
            handler: (data) => {
              console.log('Ok confirmado y data: '+data);
              console.log(data);
              this.titulo = data.nombre;
            }
          }
        ]
      }
    );
    await alert.present();
  }
}
