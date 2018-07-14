import { Component, OnInit, EventEmitter} from '@angular/core';
import { Producto } from '../model/Producto';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-kardex-home',
  templateUrl: './kardex-home.component.html',
  styleUrls: ['./kardex-home.component.css'],
  providers: [MessageService]
})
export class KardexHomeComponent implements OnInit {

  public producto:Producto;
  public ListItems:Producto[];
  public msgs: Message[] = [];
  public verAdicionarProducto;

  constructor() { }

  ngOnInit() {

    this.producto = new Producto();
    this.verAdicionarProducto=false;
    this.ListItems=[];
  }

  onSubmit(){
     //prueba
    this.producto.nombre='item1';
    this.producto.cantidad = 1;
    this.ListItems.push(this.producto);
    this.success('exito');
  }

  close(event){
    this.verAdicionarProducto=false;
    this.onSubmit();
  }

  adicionarProducto(){
    this.verAdicionarProducto=true;
  }

  success(message:string) {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:message});
 }
 
 error (message:string){        
     this.msgs = [];
     this.msgs.push({severity:'error', summary:message});
 }

}
