import {Component, OnInit, ViewChild} from '@angular/core';
import {Usuario} from "../../common/usuario";
import {DataService} from "../../services/data.service";
import {IonList, ToastController} from "@ionic/angular";
import {Share} from "@capacitor/share";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista', {static: false}) lista!: IonList;
  usuarios: Usuario[] = [];
  habilitado = false;
  constructor(private dataService: DataService,
              private toastCtrl: ToastController) { }

  ngOnInit() {
    this.cargarUSuarios();
  }

  private async cargarToast(message: string){
    const toast =
      await this.toastCtrl.create(
      {
        message,
        color: 'success',
        duration: 1500,
        position: "middle"
      }
    );
    await toast.present();
  }
  private cargarUSuarios() {
    this.dataService.getUsuarios().subscribe(
      {
        next: value => {
          this.usuarios = value;
        },
        error: err => {
          console.error(err);
        },
        complete: () => {
          console.log('Complete');
        }
      }
    )
  }

  favorite(usuario: Usuario) {
    console.log('Aañdido a favoritos',usuario);
    this.cargarToast('Añadiendo a '+usuario.username+' a favoritos.');
    this.lista.closeSlidingItems();
  }

  async share(usuario: Usuario) {
    console.log('Compartiendo',usuario);
    await Share.share({
      title: usuario.name,
      text: usuario.email,
      url: usuario.website,
      dialogTitle: 'Compartiendo con los amigos',
    });
    this.lista.closeSlidingItems();
  }

  call(usuario: Usuario) {
    console.log('Llamando',usuario);
    this.cargarToast('Llamando a '+usuario.phone);
    this.lista.closeSlidingItems();
  }

  reordenar(event: any) {
    console.log(event);
    const itemMover =
      this.usuarios.splice(event.detail.from,1)[0];
    this.usuarios.splice(event.detail.to,0,itemMover);
    event.detail.complete();
  }
}
