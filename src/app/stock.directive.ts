import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStock]'
})
export class StockDirective {

  private _stock: string;

  get stock(): string {
    return this._stock;
  }
  
  @Input('appStock') set stock(value: string) {
    this._stock = value;
    let color = null;
    if (parseInt(this._stock) < 5 ){
      color = 'orange';
    }
    if (parseInt(this._stock) === 0 ){
      color = 'red';
      this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
      this.renderer.setStyle(this.el.nativeElement, 'font-size', '1.5em');
      this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
    }
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    this.renderer.setStyle(this.el.nativeElement, 'text-align', 'center');
  }  

  constructor(private el: ElementRef, private renderer: Renderer2) { }
}
