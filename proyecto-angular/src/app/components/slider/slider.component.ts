import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

//Jquery
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  @Input('width')
  anchura: number = 0;

  //Uso de ailas en input, se recibe como name pero lo llamo nombre
  @Input('name') nombre;

  @Output()
  conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() {
    this.autor = {
      nombre: 'Santiago Espinosa',
      web: 'sesp13developments.com',
      linkedIn: 'https://www.linkedin.com/in/santiago-espinosa-arteaga/',
    };
  }

  ngOnInit(): void {
    this.documentReady();
  }

  documentReady(): void {
    const anchura = this.anchura;
    $(document).ready(function () {
      $('.slider').bxSlider({
        mode: 'fade',
        captions: 'false',
        slideWidth: anchura,
      });

      $('#logo').click(function () {
        alert('Hiciste click en el logo!');
      });
    });
  }

  lanzar(){
    //Lanzar output
    this.conseguirAutor.emit(this.autor);
  }
}
