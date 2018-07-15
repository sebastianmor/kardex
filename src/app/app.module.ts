import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { KardexHomeComponent } from './kardex-home/kardex-home.component';
import { DataTableModule,ConfirmDialogModule,DialogModule,InputTextareaModule,MessageModule,CalendarModule } from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductComponent } from './add-product/add-product.component';
import { KardexService} from '../app/service/kardex-service.service';
import { ConfirmationService } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    KardexHomeComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, JsonpModule,
    DataTableModule,
    CalendarModule,
    ConfirmDialogModule,
    DialogModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    MessageModule
  ],
  providers: [KardexService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
