import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
slides: {img: string; titulo: string; desc:string}[] = [
  {
    img: '/assets/images/placeholder.png',
    titulo: 'Comparte Fotos',
    desc: 'Mira y comparte tus mejores fotos en un segundo.'
  },
  {
    img: '/assets/images/music.png',
    titulo: 'Música maestro',
    desc: 'Lleva tu música allá donde vayas.'
  },
  {
    img: '/assets/images/calendar.png',
    titulo: 'Calendario',
    desc: 'No olvides nada con este magnífico calendario.'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
