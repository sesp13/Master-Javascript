import { Component, OnInit } from '@angular/core';

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

  constructor() {
    this.name = 'Componente Padre manda saludos';
  }

  ngOnInit(): void {}

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
