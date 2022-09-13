import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {
  readonly inspectionApiUrl="https://localhost:5001/api/";

  constructor(private http:HttpClient) { }

  getInspectionList():Observable<any[]>{
    return this.http.get<any>(this.inspectionApiUrl+"inspections");
  }

  addInspection(data:any){
    return this.http.post<any>(this.inspectionApiUrl+"inspections",data);
  }

  updateInspection(id:number|string,data:any){
    return this.http.put<any>(this.inspectionApiUrl+`inspections/${id}`,data);
  }

  deleteInspection(id:number|string){
    return this.http.delete<any>(this.inspectionApiUrl+`inspections/${id}`);
  }

  //type

  getInspectionTypesList():Observable<any[]>{
    return this.http.get<any>(this.inspectionApiUrl+"InspectionTypes");
  }

  addInspectionTypes(data:any){
    return this.http.post<any>(this.inspectionApiUrl+"InspectionTypes",data);
  }

  updateInspectionTypes(id:number|string,data:any){
    return this.http.put<any>(this.inspectionApiUrl+`InspectionTypes/${id}`,data);
  }

  deleteInspectionTypes(id:number|string){
    return this.http.delete<any>(this.inspectionApiUrl+`InspectionTypes/${id}`);
  }

  //statu

  getStatus():Observable<any[]>{
    return this.http.get<any>(this.inspectionApiUrl+"Status");
  }

  addStatus(data:any){
    return this.http.post<any>(this.inspectionApiUrl+"Status",data);
  }

  updateStatus(id:number|string,data:any){
    return this.http.put<any>(this.inspectionApiUrl+`Status/${id}`,data);
  }

  deleteStatus(id:number|string){
    return this.http.delete<any>(this.inspectionApiUrl+`Status/${id}`);
  }
}
