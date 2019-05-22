import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor( private httpClient:HttpClient ) { }


  /*For Adding new Records. */
  addRecord(info){
  	return this.httpClient.post('http://dummy.restapiexample.com/api/v1/create', info);
  }


  /*For calling the existing Records. */
  getData(){
  	 return this.httpClient.get('http://dummy.restapiexample.com/api/v1/employees');
  }


  /*For updating the existing Records. */
  updateRecord(obj){
  	return this.httpClient.put('http://dummy.restapiexample.com/api/v1/update/'+obj.id, obj);
  }


  /*For deleting the Records. */
  deleteRecord(id){
  	return this.httpClient.delete('http://dummy.restapiexample.com/api/v1/delete/'+id);
  }

}
