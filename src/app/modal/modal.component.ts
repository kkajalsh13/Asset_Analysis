import { Component, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  GameCode:string =""
  Modal = true

  submit(){
    if(this.GameCode == "luck"){
      this.Modal = false
      Notiflix.Notify.success('Correct')
  
    }
    else{
      Notiflix.Notify.failure("Wrong")
    }
  }  
}
