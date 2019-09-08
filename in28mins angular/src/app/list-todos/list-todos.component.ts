import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Route, Router } from '@angular/router';





export class Todo{
  constructor(public id : number,
              public description : string,
              public done : boolean,
              public targetDate : Date
  ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})




export class ListTodosComponent implements OnInit {

todos : Todo[]
deleteMessage : string
  // todos = [
  //   new Todo(1, "Learn to Dance", false, new Date()),
  //   new Todo(2, "Become an expert at Angular", false, new Date()),
  //   new Todo(3, "Visit the World", false, new Date())
  
  // ]
  // todos = [
  //   {id : 1, description : "Learn to dance"},
  //   {id : 2, description : "Become an expert at Angular"},
  //   {id : 3, description : "Visit the World"}

  // ]
  constructor(private router : Router,
    private todoDataService : TodoDataService
              ) { }

  ngOnInit() {
    this.refreshTodos()
  }


  refreshTodos(){
    this.todoDataService.retriveAllTodos("in28minutes").subscribe(
      response => { 
        console.log(response);
        this.todos = response;
      },
      error => console.log("Error @ retriveAllTodos")
    );
  }



  deleteTodo(id : number){
    this.todoDataService.deleteTodo('in28minutes', id).subscribe(
      response =>{
        console.log(response)
        this.deleteMessage = `Delete of id ${id} is Successful!`
        this.refreshTodos();
      }
    )
    

  }


  updateTodo(id)
  {
    //console.log(`Update ${id}`)

    this.router.navigate(['todos', id])
  }


  addTodo()
  {
    this.router.navigate(['todos', -1])
  }

}
