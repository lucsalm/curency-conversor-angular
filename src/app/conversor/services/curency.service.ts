import { Injectable } from '@angular/core';
import { Curency } from '../models/curency.model';

@Injectable({
  providedIn: 'root'
})
export class CurencyService {

  private curencys: Curency[];

  constructor() {}

  private curencysObj = [ //http://fixer.io
	{ "curencySigla": "AUD", "curencyDescription": "Dólar australiano" },
	{ "curencySigla": "BGN", "curencyDescription": "Lev búlgaro" },
	{ "curencySigla": "BRL", "curencyDescription": "Real brasileiro" },
	{ "curencySigla": "CAD", "curencyDescription": "Dólar canadense" },
	{ "curencySigla": "CHF", "curencyDescription": "Franco suíço" },
	{ "curencySigla": "CNY", "curencyDescription": "Yuan Chinês" },
	{ "curencySigla": "CZK", "curencyDescription": "Coroa República Tcheca" },
	{ "curencySigla": "DKK", "curencyDescription": "Coroa dinamarquesa" },
	{ "curencySigla": "EUR", "curencyDescription": "Euro" },
	{ "curencySigla": "GBP", "curencyDescription": "Libra Esterlina" },
	{ "curencySigla": "HKD", "curencyDescription": "Dólar de Hong Kong" },
	{ "curencySigla": "HRK", "curencyDescription": "Coroa Croácia" },
	{ "curencySigla": "HUF", "curencyDescription": "Florim húngaro" },
	{ "curencySigla": "IDR", "curencyDescription": "Rupia indonésia" },
	{ "curencySigla": "ILS", "curencyDescription": "Novo shekel israelense" },
	{ "curencySigla": "INR", "curencyDescription": "Rupia indiana" },
	{ "curencySigla": "JPY", "curencyDescription": "Iene japonês" },
	{ "curencySigla": "KRW", "curencyDescription": "Won sul-coreano" },
	{ "curencySigla": "MXN", "curencyDescription": "Peso mexicano" },
	{ "curencySigla": "MYR", "curencyDescription": "Malásia Ringgit" },
	{ "curencySigla": "NOK", "curencyDescription": "Coroa Noruega" },
	{ "curencySigla": "NZD", "curencyDescription": "Dólar da Nova Zelândia" },
	{ "curencySigla": "PHP", "curencyDescription": "Peso filipino" },
	{ "curencySigla": "PLN", "curencyDescription": "Złoty Polónia" },
	{ "curencySigla": "RON", "curencyDescription": "Leu romeno" },
	{ "curencySigla": "RUB", "curencyDescription": "Belarus Ruble" },
	{ "curencySigla": "SEK", "curencyDescription": "Coroa Suécia" },
	{ "curencySigla": "SGD", "curencyDescription": "Dólar de Singapura" },
	{ "curencySigla": "THB", "curencyDescription": "Baht Tailândia" },
	{ "curencySigla": "TRY", "curencyDescription": "Lira turca" },
	{ "curencySigla": "USD", "curencyDescription": "Dólar dos Estados Unidos" }, 
	{ "curencySigla": "ZAR", "curencyDescription": "Rand África do Sul" }
  ];

  listAllCurencys(): Curency[] {
  	if (this.curencys) {
  		return this.curencys;
  	} 
  	
  	this.curencys = [];

  	for (let curencyObj of this.curencysObj) {
  		let curency: Curency = new Curency();
  		Object.assign(curency, curencyObj);
  		this.curencys.push(curency);
  	}

  	return this.curencys;
  }

  
}
