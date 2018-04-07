import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loremipsum',
  templateUrl: './loremipsum.component.html',
  styleUrls: ['./loremipsum.component.css']
})
export class LoremipsumComponent implements OnInit {
name = "tejal mishra";
cls = 'colorgreen';
cls2 = 'colorred';
defaultvalue = "";
defaultplaceholder="default placeholder";
times = 0;
show: boolean = true;
  constructor() { }

  ngOnInit() {   }
  changeblock(){this.show =!this.show;}
  increaseclick()
  {this.times=this.times+1;
  }

}
