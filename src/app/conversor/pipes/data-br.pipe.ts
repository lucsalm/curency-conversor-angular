import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBr'
})
export class DataBrPipe implements PipeTransform {

  transform(value: string): string {
    if(!value){
      return ''
    }
    const dateValue = value.split("-")
    if(dateValue.length!==3){
      return value
    }

    return dateValue[2] + "/" +dateValue[1] + "/" + dateValue[0];
  }

}
