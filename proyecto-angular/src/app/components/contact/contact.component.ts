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
    $('#logo').click(function () {
      $('header').css('background', 'green');
    });
  }
}
