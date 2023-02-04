import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Card} from "../../models/Card"
import * as data from "../../data.json"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Input() name: string = "";
  @Input() imgPath: string = "";
  @Output() cardData = new EventEmitter<any>()
  @Output() timeframe = new EventEmitter<any>()

  title = "Time Tracking Dashboard"
  data: Card[] = []


  onToggleClick($event: any) {
    const validId = ["daily", "weekly", "monthly"]
    let clickedElement = $event.target || $event.srcElement;

    if (validId.includes(clickedElement.id)) {
      let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");

      if( isCertainButtonAlreadyActive ) {
        isCertainButtonAlreadyActive.classList.remove("active");
      }

      switch (clickedElement.id) {
        case "daily":
          this.timeframe.emit("Day")
          break
        case "weekly":
          this.timeframe.emit("Week")
          break
        case "monthly":
          this.timeframe.emit("Month")
          break
      }

      clickedElement.className += " active";
      this.data = this.getData(data, clickedElement.id)
      this.cardData.emit(this.data)
    }
  }

  getData(arr: any[], time: string) {
    arr = Object.values(arr)[7]
    return arr.map(elem => (
      {
        title: elem.title,
        current: elem.timeframes[time].current,
        previous: elem.timeframes[time].previous
      }
    ))
  }


}
