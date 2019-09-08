package com.in28minutes.application.apple.helloworld;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

//controller
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
	
	//get, uri, method
	
	//@RequestMapping(method = RequestMethod.GET,  path = "/hello-world")
	@GetMapping(path = "/hello-world")
	public String helloWorld()
	{
		return "Hello World";
	}
	
	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean()
	{
		//throw new RuntimeException("Some error has happened. Contact Support @ ***-***");
		return  new HelloWorldBean("Hello-WORLD-CHANGED");
	}
	
	
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name)
	{
		return new HelloWorldBean("Welcome to our world, We like you Mr." + name);
	}

}
