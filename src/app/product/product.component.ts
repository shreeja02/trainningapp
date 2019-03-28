import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ProductModel } from './productClass';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  @ViewChild('demo') x: ElementRef;
  arrProduct: ProductModel[] = [
    new ProductModel(101, "abc", 1000, 5),
    new ProductModel(102, "def", 2000, 0)
  ];
  arr1:ProductModel[]=this.arrProduct;

  constructor() { }


  ngOnInit() {
    console.log("inside ngOnInit" + this.x.nativeElement.value);
  }

  ngAfterViewInit(){
    this.x.nativeElement.value = "jinal shah";
    console.log("after " + this.x.nativeElement.value);
  }

  onClick(){
    console.log(this.x.nativeElement.value);
  }

  onAddProduct(pro_id, pro_name, pro_price, pro_soh) {
    this.arrProduct.push(new ProductModel(pro_id, pro_name, pro_price,pro_soh));
  }

  onDeleteProduct(item) {
    this.arrProduct.splice(this.arrProduct.indexOf(item),1);
  }
  keyUp(searchterm) {
    // this.arr1=this.arrProduct.filter((x)=>x.pro_name.startsWith(searchterm));
    if (searchterm !== '')
    {
      this.arrProduct = this.arr1; // write this to solve problem when we backspace the text
      this.arrProduct = this.arrProduct.filter(el => el.pro_name.indexOf(searchterm)!==-1);
    }
    else{
      this.arrProduct=this.arr1;
    }
  }

  keyUp2(searchterm,event)
  {
    //console.log(event);
    if(event.keyCode==8){ //backspace keycode
      console.log('hi');

    }
  }

}
