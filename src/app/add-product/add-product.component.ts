import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Producto } from '../model/Producto';
import { Message} from 'primeng/primeng';
import { KardexService} from '../service/kardex-service.service';  

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public msgs: Message[];
  public producto:Producto;

  @Output ()
  closePopup: EventEmitter<boolean> = new EventEmitter<boolean>(); 
  
  constructor(private _kardexService:KardexService) { }


  ngOnInit() {
    this.producto = new Producto();
    this.producto.fecha = new Date();
    this.msgs=[];
  }

  guardarProducto(){
     console.log('guardarProducto');  
     this._kardexService.crearProducto(this.producto).then
     (res=>{
        console.log(res);
        this.success('se crearon los datos con exito');
     }).catch(err=>{ 
      console.log(err);
      this.error(err);
    });
    
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
