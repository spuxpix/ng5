import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount:number = 4;
  btnName = 'เพิ่มรายการ';
  listText:string = '';
  listall= [];
  
  constructor() { }

  ngOnInit() {
   this.itemCount = this.listall.length;
  }

  addItem(){
    if(this.listText != ''){
      //alert('5555');
      this.listall.push(this.listText);
      this.itemCount = this.listall.length;
      this.listText = '';
    }else{
      alert('ใส่ซิสัด');
    }
  }

}
