import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConversionResponse } from '../models/conversion-response.model';
import { Conversion } from '../models/coversion.model';
import { ConversorService } from '../services/conversor.service';


@Component({
  selector: 'app-modal-price',
  templateUrl: './modal-price.component.html',
  styleUrls: ['./modal-price.component.css']
})
export class ModalPriceComponent implements OnInit {

  @Input() conversionResponse:ConversionResponse
  @Input() conversion:Conversion
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>()
  @ViewChild("content",{static:true}) content

  
  constructor(
    private conversorService:ConversorService,
    private modal: NgbModal) { }

  ngOnInit(): void {
    this.modal.open(this.content)
  }

  get convertedValue():string{
    if(this.conversionResponse===undefined){
      return '0'
    }
    return (this.conversion.value*
      this.conversionResponse.rates[this.conversion.destination])
      .toFixed(2)
  }

  get originQuoteToDestination():string{  
    return this.conversorService.originQuoteToDestination(this.conversionResponse,this.conversion).toFixed(4)
  }

  get destinationQuoteToOrigin():string{
    return this.conversorService.destinationQuoteToOrigin(this.conversionResponse,this.conversion)
  }

  get quoteDate():string{
    return this.conversorService.quoteDate(this.conversionResponse)
  }

  backToConversor(){
    this.modal.dismissAll()
    this.onConfirm.emit();
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.backToConversor()
    }
  }

  
}
