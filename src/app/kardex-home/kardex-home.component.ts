import { Component, OnInit, EventEmitter} from '@angular/core';
import { Producto } from '../model/Producto';
import { Message} from 'primeng/primeng';
import { KardexService} from '../service/kardex-service.service';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-kardex-home',
  templateUrl: './kardex-home.component.html',
  styleUrls: ['./kardex-home.component.css']
})
export class KardexHomeComponent implements OnInit {

  public producto:Producto;
  public ListItems:Producto[];
  public ListItemsTemp:Producto[];
  public msgs: Message[];
  public verAdicionarProducto:Boolean;

  constructor(private _KardexService:KardexService,private _confirmationService:ConfirmationService) { }

  ngOnInit() {

    this.producto = new Producto();
    this.verAdicionarProducto=false;
    this.ListItems=[];
    this.ListItemsTemp=[];
    this.msgs=[];

  }

  onSubmit(){
    this.consultarListaItems();
  }

  close(event){
    this.verAdicionarProducto=false;
    this.onSubmit();
  }

  guardarCambios(row:Producto){
    console.log('guardar registro');
    row.totalEntrada = row.cantidadEntrada*row.valorEntrada;
    row.totalSalida = row.cantidadSalida*row.valorSalida;
    row.totalSaldo = row.cantidadSaldo*row.valorSaldo;
   
    this._KardexService.guardarProducto(row).then
    (res=>{ 
      console.log(res);
      this.success('Se guardaron los cambios con éxito');
    }).catch(err=>{ 
      console.log(err);
      this.error(err);
    });
   
    this.consultarListaItems();
  }

  confirmar(row:Producto) {
   
    this._confirmationService.confirm({
      message: 'Esta seguro que desea eliminar el registro?',
      header: 'Eliminar Registro',
      icon: 'fa fa-question-circle',
      accept: () => {
        this.EliminarProducto(row);
      },
      reject: () => {      
        return;
      }
    });
    }

  consultarListaItems(){
     this._KardexService.consultarProductos().
     then(
       res=>{
         this.ListItemsTemp=res;
         for (let x of this.ListItemsTemp){
          x.fecha = new Date();
          
          x.totalEntrada = x.cantidadEntrada*x.valorEntrada;
          x.totalSalida = x.cantidadSalida*x.valorSalida;     
          // calculo total saldo
          if(x.totalEntrada>0 && x.totalSalida == 0){
            x.totalSaldo = x.cantidadEntrada * x.valorEntrada;
          }
          this.ListItems.push(x);
       }
      }).catch(err=>{ 
        console.log(err);
        this.error(err);
      });;
  }

  EliminarProducto(row:Producto){
    console.log('eliminar registro');
    this._KardexService.eliminarProducto(row).then(res=>{ 
      console.log(res);
      this.success('Se elimino el registro con éxito');
    }).catch(err=>{ 
      console.log(err);
      this.error(err);
    });
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
