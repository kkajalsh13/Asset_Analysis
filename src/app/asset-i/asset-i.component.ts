import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asset-i',
  templateUrl: './asset-i.component.html',
  styleUrls: ['./asset-i.component.css']
})
export class AssetIComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Id:any
  score = 0 
  ShowScore = false
  Answers:any = []
  correctAnswers:any = ["2] Ford Motor Credit Co LLC","4] Intl Bk Recon & Develop","3] Ford Motor Company","1] Republic Of Argentina"]
  Questions:any = ["a) Wanted the best possible credit quality?", "b) Thought interest rates were going to rise?", "c) Wanted to participate in the equity of a company if it performed well?", "d) Wanted exposure to the British corporate debt market and a strengthening Euro?"]
  color:any = ["white","rgb(237, 247, 244)","white","rgb(237, 247, 244)"]
  pictures:any = ["assets/SS1.png","assets/SS2.png","assets/SS3.png","assets/SS4.png"]
  PictureNames:any =["1] Republic Of Argentina","2] Ford Motor Credit Co LLC","3] Ford Motor Company","4] Intl Bk Recon & Develop"]
  Margins:any = ["132px","132px","132px","0px"]

  reset(){
    window.location.reload();
  }
  select1(event:any){
    this.Id = event.target.id
  }

  select2(event:any){
    let index = event.target.id
     if(this.Answers.includes(this.Id)){
      let y = this.Answers.indexOf(this.Id)
      this.Answers[y] = ""
      this.Answers[index] = this.Id
    }
    else{
      this.Answers[index] = this.Id
    }

  }
  submit(){
    for(let i = 0; i< this.correctAnswers.length; i++){
      if(this.Answers[i] == this.correctAnswers[i]){
        this.score += 1
      }
    }
    this.ShowScore = true
  }
  
  allowDrop(event:any) {
    event.preventDefault();
  }
  
  drag(event:any) {
    event.dataTransfer.setData("text",event.target.getAttribute("id"));
  }
  
  drop(event:any) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    let x = (document.getElementById(data) as HTMLFormElement).name
    let index = event.target.id
     if(this.Answers.includes(x)){
      let y = this.Answers.indexOf(x)
      this.Answers[y] = ""
      this.Answers[index] = x
    }
    else{
      this.Answers[index] = x
    }

  }
}

