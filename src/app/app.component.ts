import { Component, OnInit } from '@angular/core';
import { Card } from "./models/Card"
import * as data from "./data.json"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Time Tracking Dashboard';
  data: Card[] = []
  timeframe: string = ""
  colors: string[] = [
    "var(--card-orange)",
    "var(--card-sky-blue)",
    "var(--card-light-red)",
    "var(--card-bright-green)",
    "var(--card-purple)",
    "var(--card-yellow)",
  ]
  icons: string[] = [
    'url("/assets/images/icon-work.svg")',
    'url("/assets/images/icon-play.svg")',
    'url("/assets/images/icon-study.svg")',
    'url("/assets/images/icon-exercise.svg")',
    'url("/assets/images/icon-social.svg")',
    'url("/assets/images/icon-self-care.svg")',
  ]

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

  receiveData(event: any) {
    this.data = event
  }

  updateTimeframe(event: any) {
    this.timeframe = event
  }

  ngOnInit() {
    this.data = this.getData(data, "daily")
  }
}
