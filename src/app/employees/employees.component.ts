import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  listOfEmployees: Array = ['emp1','emp2', 'emp3'];
  constructor() { }

  ngOnInit() {
  }

}
