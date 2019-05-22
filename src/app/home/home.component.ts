import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../sharedservice/shared-service.service';
import { Record } from '../model/data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[SharedServiceService]
})
export class HomeComponent implements OnInit {

	
  record = new Record();
  data:any;
  btntitle = 'submit';
  currentindex = -1;

  constructor( private sharedService:SharedServiceService ) { }

  ngOnInit() {
  this.getData();
  }

 
  /*For Adding new Records. */
  addRecord(){
  	
  	if(this.currentindex == -1){
  		this.sharedService.addRecord(this.record).subscribe(data => {
  			this.getData();
  		});
  	}
  	else{
  		this.sharedService.updateRecord(this.record).subscribe(data =>{
  			this.getData();
  		});
  	}
  	this.btntitle = 'submit';
  	this.currentindex = -1;
  	this.record = new Record();
  }


  /*For calling the existing Records. */
  getData(){
  	return this.sharedService.getData().subscribe(data =>
  	{
  		this.data = data;
  	});
  }


  /*For updating the existing Records. */
  updateRecord(obj){
  	this.btntitle="Update";
  	this.currentindex = obj.id;
  	this.record.id = obj.id;
  	this.record.name = obj.employee_name;
  	this.record.age = obj.employee_age;
  	this.record.salary = obj.employee_salary;
  }


  /*For deleting the Records. */
  deleteRecord(id){
  	this.sharedService.deleteRecord(id).subscribe(data =>
  	{
  		this.getData();
  	});
  }

}
