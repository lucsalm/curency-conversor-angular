import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './components/conversor.component';
import { CurencyService } from './services/curency.service';
import { ConversorService } from './services/conversor.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NumberDirective } from './directives/number.directive';
import { ModalPriceComponent } from './utils/modal-price.component';
import { DataBrPipe } from './pipes/data-br.pipe';



@NgModule({
  declarations: [
    ConversorComponent,
    NumberDirective,
    ModalPriceComponent,
    DataBrPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    ConversorComponent,
    ModalPriceComponent
  ],
  providers:[
    CurencyService,
    ConversorService
  ],
})
export class ConversorModule { }
