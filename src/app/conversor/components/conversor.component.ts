import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Curency } from '../models/curency.model';
import { ConversionResponse } from '../models/conversion-response.model';
import { Conversion } from '../models/coversion.model';
import { CurencyService } from '../services/curency.service';
import { ConversorService } from '../services/conversor.service';



@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  @ViewChild("conversorForm",{static:true}) conversorForm:NgForm
  public curencys: Curency[]
  public conversion:Conversion
  public conversionResponse:ConversionResponse
  public hasError:boolean
  public openModal:boolean

  constructor(
    private curencyService:CurencyService,
    private conversorService:ConversorService,
    ) { }
  

  
  ngOnInit(): void {
    this.curencys = this.curencyService.listAllCurencys()
    this.init()
  }
  init(){
    this.openModal =false
    this.conversion = new Conversion(null,"EUR","BRL")
    this.hasError = false
  }


  converter(){
    if(this.conversorForm.form.valid){
      if(this.conversion.origin!=="EUR"){
        this.converterAny(this.conversion.origin,this.conversion.destination)
      }
      else{
        this.conversorService
        .converter(this.conversion)
        .subscribe(
          response =>{
              this.conversionResponse = response
              console.log(JSON.stringify(this.conversionResponse))
              this.hasError = !response.success
              if(!this.hasError){
                this.openModal = true
              }
            },
          error => this.hasError=true)
        } 
      }
  }

  // Esse método não deveria existir 
  // a API usada agora só deixa fazer consutas de EUR para outras moedas
  // Então foi necessario essa ajuste onde fazemos EUR -> ORIGEM e EUR -> DESTINO
  // Depois calculamos a conversao ORIGEM -> DESTINO
  // Isso infelizmente nos faz gastar duas requisicoes
  converterAny(origin:string,destination:string){
    let conversionOrigin = new Conversion()
    conversionOrigin.origin = "EUR"
    conversionOrigin.destination = origin

    let conversionDestination = new Conversion()
    conversionDestination.origin = "EUR"
    conversionDestination.destination = destination

    this.conversorService.converter(conversionOrigin).subscribe(
        responseOrigin =>{
          this.conversorService.converter(conversionDestination).subscribe(
              responseDestination =>{
                let originQuote = this.conversorService.originQuoteToDestination(responseOrigin,conversionOrigin)
                let destinationQuote = this.conversorService.originQuoteToDestination(responseDestination,conversionDestination)                

                this.conversionResponse = responseDestination    
                this.conversionResponse.base = origin
                this.conversionResponse.rates[destination] = destinationQuote/originQuote
                console.log(JSON.stringify(this.conversionResponse))
                if(!this.hasError)
                  this.openModal = true        
              },
              error => this.hasError=true)
            },
        error => this.hasError=true)
  } 
}
