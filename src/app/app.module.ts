import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { KardexHomeComponent } from './kardex-home/kardex-home.component';
import { DataTableModule,ConfirmDialogModule,DialogModule,InputTextareaModule,MessageModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './add-product/add-product.component';
const appRoutes: Routes = [

  {path: 'Home', component: KardexHomeComponent, pathMatch:'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    KardexHomeComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule, JsonpModule,
    DataTableModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    MessageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
