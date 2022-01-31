import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appNumber]',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:NumberDirective,
      multi:true
    }
    
  ]
})
export class NumberDirective implements ControlValueAccessor{

  constructor(private el?:ElementRef) { }
  

  @HostListener('keyup',['$event'])

  onKeyUp($event:any){
    let value = $event.target.value
    let dacimalIndex = value.indexOf('.')

    value = value.replace(/[\D]/g,'')

    if(dacimalIndex>0){
      value = value.substring(0,dacimalIndex) + '.' + value.substring(dacimalIndex)
    }

    $event.target.value = value
    this.onChange(value)
  }

  onTouched:any;
  onChange:any;
  
  writeValue(value: any): void {
    this.el.nativeElement.value = value
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  

}
