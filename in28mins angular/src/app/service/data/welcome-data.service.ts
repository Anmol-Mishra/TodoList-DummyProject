import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


export class HelloWorldBean{
  message : String;
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>("http://localhost:8080/hello-world-bean");
  }
  executeHelloWorldBeanServiceWithParam(name){

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization : basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);//,{headers});
  }

  createBasicAuthenticationHttpHeader(){
    let username = "in28minutes";
    let password = "dummy";

    let basicAuthHeaderString = "Basic " + window.btoa(username + ":" + password);

    return basicAuthHeaderString;
  }



}
