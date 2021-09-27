import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: number;
  public name: string;
  public autor: any;

  @ViewChild('textos') textos;

  constructor() {
    this.name = 'Componente Padre manda saludos';
  }

  ngOnInit(): void {
    //Opcion clasica javascript
    // console.log(document.querySelector('#texto'));

    //Opcion viewChild
    console.log(this.textos);
  }

  cargarSlider() {
    this.anchuraToSlider = this.widthSlider;
  }

  resetSlider() {
    this.anchuraToSlider = null;
  }

  recogerAutor(event: any) {
    this.autor = event;
  }
}
