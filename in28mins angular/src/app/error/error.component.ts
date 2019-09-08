import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = "An error occured. Contact Support @ 9**4**5***"
  constructor() { }

  ngOnInit() {
  }

}
