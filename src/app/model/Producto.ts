export class Producto {
    public id:number;
    public detalle:string;
    public fecha:Date;
    public cantidadEntrada: number;
    public cantidadSalida: number;
    public cantidadSaldo: number;
    public valorEntrada:number;
    public valorSalida:number;
    public valorSaldo:number;
    public totalEntrada:number;
    public totalSalida:number;
    public totalSaldo:number;

    constructor(){
     this.id=null;
     this.detalle = "";
     this.fecha=null;
     this.cantidadEntrada=0;
     this.cantidadSalida=0;
     this.cantidadSaldo=0;
     this.valorEntrada=0;
     this.valorSalida=0;
     this.valorSaldo=0;
     this.totalEntrada=0;
     this.totalSalida=0;
     this.totalSaldo=0;
     
    }

}
