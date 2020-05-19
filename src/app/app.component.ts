import { Component } from '@angular/core';
import { Expression } from './models/Expression';
import { ApiCallsService } from './api-calls.service';
import { ResponseFromApi } from './models/ResponseFromApi';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  expresionString : Expression  = new Expression();
  response : ResponseFromApi = new ResponseFromApi();

  constructor( private _apiCallService : ApiCallsService ) {}

  addElement( element : string ){

    this.expresionString.expression += element;

  }

  result(){
    
    if(this.expresionString.expression === ''){
      this.response.plaintext = 'Expresion no valida'
      this.response.img = '...'
      return;
    }
     this._apiCallService.getResult(this.expresionString.expression).subscribe(
      data =>{
        this.response.img = data.queryresult.pods[0].subpods[0].img.src;
        this.response.plaintext = data.queryresult.pods[0].subpods[0].plaintext;
      });
    
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
