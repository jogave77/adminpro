import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chichito',
  templateUrl: './chichito.component.html',
  styles: []
})
export class ChichitoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.mensaje();
  }

  mensaje(){
    alert('Chichito xxxxllarge...');
  }


  
}
