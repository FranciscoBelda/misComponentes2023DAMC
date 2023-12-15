import { Component, OnInit } from '@angular/core';
import {Post} from "../../../common/Post";
import {DataService} from "../../../services/data.service";
import {PopoverController} from "@ionic/angular";
import {PopoverEjercicioPage} from "../popover-ejercicio/popover-ejercicio.page";

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.page.html',
  styleUrls: ['./ejercicio01.page.scss'],
})
export class Ejercicio01Page implements OnInit {
  posts: Post[] = [];
  skeleton = true ;
  constructor(private dataService: DataService,
              private popoverCtrl: PopoverController) { }

  ngOnInit() {
    this.loadPosts();
  }

  private loadPosts() {
    this.dataService.getPosts().subscribe({
      next: value => {
        this.posts = value;
        this.loadSkeleton();
      },
      error: err => {
        console.error(err);
      },
      complete: () => {
        console.log('Done');
      }
    })
  }

  loadSkeleton(event?: any) {
    this.skeleton = true;
    setTimeout(() => {
      this.skeleton = false;
      if(event) event.target.complete();
    },1000);
  }

  async abrirPopover(miPost: Post) {
    const popover = await this.popoverCtrl.create(
      {
        component: PopoverEjercicioPage,
        componentProps: {
          post: miPost
        }
      }
    );
    await popover.present();
  }
}
