
import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'server/server/shared/rest-api.service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  Employee: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadEmployees()
  }

  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      this.Employee = data;
    })
  }

  // Delete employee
  deleteEmployee(id: any) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEmployee(id).subscribe((data: any) => {
        this.loadEmployees()
      })
    }
  }  

}
