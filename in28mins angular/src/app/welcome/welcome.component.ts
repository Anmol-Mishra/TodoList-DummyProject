import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private route : ActivatedRoute,
              private welcomeDataService : WelcomeDataService) { }


  message = "We welcome you :"
  welcomeName = '';
  welcomeMessageFromService = "";
  errorMessageFromService = "";
  ngOnInit() {
    
    console.log(this.message)
    console.log(this.route.snapshot.params['name'])
    this.welcomeName = this.route.snapshot.params['name']
  }

  getWelcomeMessageFromParam(){
    console.log(this.welcomeName)
    this.welcomeDataService.executeHelloWorldBeanServiceWithParam(this.welcomeName).subscribe(
      response=>this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }


  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
    // console.log(response)
    // console.log(response.message);
  }

  handleErrorResponse(error){
    // console.log(error)
    // console.log(error.error)
    // console.log(error.error.message)
    this.errorMessageFromService = error.error.message
  }
}
