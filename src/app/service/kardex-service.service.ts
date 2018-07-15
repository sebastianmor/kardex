import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, ResponseContentType} from "@angular/http";
import {Producto} from '../model/Producto';


@Injectable()
export class KardexService {
  private baseApiUrl ="http://localhost:3000/productos";
  constructor(private _http:Http){ }

  consultarProductos() {
    
    let headers = new Headers();       
    headers.append('Content-Type', 'application/json');
   
    let options = new RequestOptions({headers: headers});

    return this._http.get(this.baseApiUrl,
        options).toPromise()
        .then(res => <Producto[]> res.json())
        .catch(function(err) {                         
          throw err;                 
        });
    }

    guardarProducto(producto:Producto){
      let body = producto;
      let headers = new Headers();       
      let options = new RequestOptions({headers: headers});
      headers.append('Content-Type', 'application/json');
      return this._http.put(this.baseApiUrl+"/"+producto.id, body,options)
      .toPromise()
      .then((res:Response)=>{               
                 return res.json();                                                         
                })
    }

    eliminarProducto(producto:Producto){
     
      let headers = new Headers();       
      let options = new RequestOptions({headers: headers});
      headers.append('Content-Type', 'application/json');
      return this._http.delete(this.baseApiUrl+"/"+producto.id,options)
      .toPromise()
      .then((res:Response)=>{               
                 return res.json();                                                         
                })
    }

    crearProducto(producto:Producto){
      let body = producto;
      let headers = new Headers();       
      let options = new RequestOptions({headers: headers});
      headers.append('Content-Type', 'application/json');
      return this._http.post(this.baseApiUrl, body,options)
      .toPromise()
      .then((res:Response)=>{               
                 return res.json();                                                         
                })
    }
}
