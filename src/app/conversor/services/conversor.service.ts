import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConversionResponse } from '../models/conversion-response.model';
import { Conversion } from '../models/coversion.model';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=0ea0798c5ef820a6011db105ef32635c";

  constructor(private http:HttpClient) { }

  converter(conversion:Conversion):Observable<any>{
    let urlParams = "&base="+conversion.origin+"&symbols="+conversion.destination
    return this.http.get(this.BASE_URL+urlParams)
  }

  originQuoteToDestination(conversionResponse:ConversionResponse,conversion:Conversion):number{
    if(conversionResponse === undefined){
      return 0
    }
    return conversionResponse.rates[conversion.destination]
  }

  destinationQuoteToOrigin(conversionResponse:ConversionResponse,conversion:Conversion):string{
    if(conversionResponse === undefined){
      return '0'
    }
    return (1/conversionResponse.rates[conversion.destination]).toFixed(4)
  }

  quoteDate(conversionResponse:ConversionResponse):string{
    if(conversionResponse === undefined){
      return ''
    }
    return conversionResponse.date
  }

}
