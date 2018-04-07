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
cls3 = 'colorblue';
defaultvalue = "";
/*colors = [
  this.cls, this.cls2, this.cls3,
]*/
colors = {
      ' colorgreen colorblue colorred':true,
}
inlineColor = 'red';
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
