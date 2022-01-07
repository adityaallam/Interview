import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() cards: Array<string|number> = [];
  currentCardIndex: number = 1;
  constructor() { }
 
  ngOnInit(): void {
  }

  prev() {
    
    if(this.currentCardIndex - 2 < 0) {
    } else {
      this.currentCardIndex -= 2 ;
    }
    
  }

  next() {
    
    if(this.currentCardIndex + 2 > this.cards.length) {
    } else {
      this.currentCardIndex += 2;
    }
    
  }

}
