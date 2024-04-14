import { BlocModel } from './../Models/Bloc';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  constructor(private http : HttpClient) { }
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  updateBloc(idBloc: any, updatedData: any): Observable<any> {
    return this.http.put<any>("http://192.168.80.128:8086/projet/Bloc/update-bloc/" + idBloc, updatedData);
  }
  
  getBlocList():Observable<BlocModel[]>
  {
    return this.http.get<BlocModel[]>("http://192.168.80.128:8086/projet/Bloc/retrieve-all-blocs");
  }
  retrieveBloc(idBloc: any): Observable<any> {
    return this.http.get<any>(`http://192.168.80.128:8086/projet/Bloc/retrieve-bloc/${idBloc}`);
  }
  
  
AddBloc(data : any)
{
  return this.http.post<any>("http://192.168.80.128:8086/projet/Bloc/add-bloc",data);

}
DeleteBloc(idBloc: any): Observable<any> {
    return this.http.delete<any>(`http://192.168.80.128:8086/projet/Bloc/remove-bloc/${idBloc}`);
  }
  
UpdateBlocById(idBloc: any, updatedData: any): Observable<any> {
    return this.http.put<any>(`http://192.168.80.128:8086/projet/Bloc/update-bloc/${idBloc}`, updatedData);
  }

 
  

}