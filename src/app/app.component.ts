import { Component } from '@angular/core';
import { Expression } from './models/Expression';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  expresionString : Expression  = new Expression();

  addElement( element : string ){

    this.expresionString.expression += element;

  }

  // employeeArray: Employee[] = [
  //   {id: 1 , name: 'Edward' , country: 'Colombia'},
  //   {id: 2 , name: 'Claudia' , country: 'Venezuela'},
  //   {id: 3 , name: 'Marian' , country: 'Costa Rica'},
  // ];

  // selectedEmployee : Employee = new Employee();

  // addOrEdit(){
  //   this.selectedEmployee.id = this.employeeArray.length + 1;
  //   this.employeeArray.push(this.selectedEmployee)
  //   this.selectedEmployee = new Employee();
  // }

}
