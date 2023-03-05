import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  contando=1;
  pctimeum=0;
  pctimedois=0;

  constructor() {}

  somarum () {
    this.contando = 1
  }

  somartres () {
    this.contando = 3
  }

  somarseis () {
    this.contando = 6
  }

  somarnove () {
    this.contando = 9
  }

  somardoze () {
    this.contando = 12
  }

  botaosomatimeum () {
    this.pctimeum += this.contando
    this.contando = 1
  }

  botaosomatimedois () {
    this.pctimedois += this.contando
    this.contando = 1
  }

  botaosubtraitimeum () {
    this.pctimeum -= this.contando
    this.contando = 1

    if (this.pctimeum <= 0) {
      this.pctimeum = 0
    }
  }

  botaosubtraitimedois () {
    this.pctimedois -= this.contando
    this.contando = 1

    if (this.pctimedois <= 0) {
      this.pctimedois = 0
    }
  }

  PlacarTime1() {
 
  }

  PlacarTime2 () {
    
  }

}
