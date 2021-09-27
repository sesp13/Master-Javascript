import { Component, OnInit } from '@angular/core';
//Jquery
declare var $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.documentReady();
  }

  documentReady(): void {
    $(document).ready(function () {
      $('.slider').bxSlider();

      $('#logo').click(function () {
        alert('Hiciste click en el logo!');
      });
    });
  }
}
