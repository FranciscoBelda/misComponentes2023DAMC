import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal} from "@ionic/angular";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
@ViewChild(IonModal) modal!: IonModal;
@ViewChild('formulario') formulario!: NgForm;
usuario: {nombre: string; email: string; ciudad: string} =
  {
    nombre: '',
    email: '',
    ciudad: ''
  };
usuarios: {nombre: string; email: string; ciudad: string}[] = [];
message = 'Abra el modal y rellene los datos';
  constructor() { }

  ngOnInit() {
  }

  cancel(){
    this.modal.dismiss(null, 'cancel');
  }

  onSubmitTemplate(){
    this.modal.dismiss(this.formulario.value, 'confirm');
  }

  onWillDismiss(event: any){
    if(event.detail.role === 'confirm'){
      console.log(event);
      this.message = 'Hola, ' + event.detail.data.nombre;
      this.usuarios.push(event.detail.data);
    }
  }
}
