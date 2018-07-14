import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Producto } from '../model/Producto';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers: [MessageService]
})
export class AddProductComponent implements OnInit {

  public msgs: Message[] = [];
  public producto:Producto;

  @Output ()
  closePopup: EventEmitter<boolean> = new EventEmitter<boolean>(); 
  
  constructor() { }


  ngOnInit() {
    this.producto = new Producto();
    
  }

  guardarProducto(){
    console.log('guardarProducto');
  }

  cerrarPopup(){
    this.closePopup.emit(false);   
    
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
