import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('formatar a data 2022-01-30 para 30/01/2022',()=>{
    const pipe = new DataBrPipe()
    expect(pipe.transform("2022-01-30")).toEqual("30/01/2022")
  })
});
