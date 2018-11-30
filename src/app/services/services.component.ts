import {Component, Injectable, OnInit} from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements  OnInit {

  constructor() {

  }

  ngOnInit() {
    $(document).ready(function() {
      $('#first').hide();
      $('#second').hide();
      $('#third').hide();
      $('#forth').hide();
      $('#fifth').hide();
      $('#sixth').hide();

      $('#one').click(function() {
        $('#first').toggle();
      });

      $('#two').click(function() {
        $('#second').toggle();
      });

      $('#three').click(function() {
        $('#third').toggle();
      });


    });
  }

}
