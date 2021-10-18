import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  public num1:number;
  public num2: number;
  sum={};
  dif={};
  prod={};
  div={};
  fact1=1;
  fact2=1;
  flag1=0;
  flag2=0;
  check={};

  add(){
    this.check=0;
    this.sum = this.num1 + this.num2;
  }
  subtract(){
    this.check=1;
    if(this.num1 > this.num2){
      this.dif = this.num1 - this.num2;
    }
    else{
      this.dif = this.num2 - this.num1;
    }
  }
  multiply(){
    this.check=2;
    this.prod = this.num1 * this.num2;
  }
  divide(){
    this.check=3;
    this.div = this.num1 / this.num2;
  }
  fact(){
    this.check=4;
    for(let i = 0;i<=this.num1;i++){
      if(i==0){
        this.fact1 *= 1;
      }
      else if(i==1){
        this.fact1 *= 1;
      }
      else{
        this.fact1 *= i;
      }
    }
    for(let i = 0;i<=this.num2;i++){
      if(i==0){
        this.fact2 *= 1;
      }
      else if(i==1){
        this.fact2 *= 1;
      }
      else{
        this.fact2 *= i;
      }
    }
  }
  prime(){
   this.check=5;
   for(let i=2;i<this.num1;i++){
     if(this.num1 % i == 0){
       this.flag1 = 1;
       break;
     }
   }
   for(let i=2;i<this.num2;i++){
    if(this.num2 % i == 0){
      this.flag2 = 1;
      break;
    }
  }

  }

  }