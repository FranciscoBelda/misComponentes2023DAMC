import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../common/Post";

@Component({
  selector: 'app-popover-ejercicio',
  templateUrl: './popover-ejercicio.page.html',
  styleUrls: ['./popover-ejercicio.page.scss'],
})
export class PopoverEjercicioPage implements OnInit {
  @Input() post!: Post;
  constructor() { }

  ngOnInit() {
    console.log(this.post);
  }

}
