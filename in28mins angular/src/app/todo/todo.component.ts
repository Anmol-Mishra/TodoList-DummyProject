import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id : number;
  todo : Todo;
  constructor(private todoService : TodoDataService,
              private route : ActivatedRoute,
              private router : Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    
    this.todo = new Todo(this.id ,"", false, new Date())

    if(this.id != -1){
    this.todoService.retriveTodo('in28minutes', this.id).subscribe(
      response => this.todo = response
    )
    }
  }
  

  saveTodo(){

    if(this.todo.id === -1){
      //Create Todo

      this.todoService.addTodo("in28minutes", this.todo).subscribe(
        response=>console.log(response),
        error=>console.log("Error @ Save Todo while adding")
      )
    }
    else{
    this.todoService.updateTodo("in28minutes", this.id, this.todo).subscribe(
      response=>{
        console.log(response)
        this.router.navigate(['todos'])
                
      }
    )

    }
    }

}
