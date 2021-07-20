import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public title = "我是一个新闻组件!"
  public list: Array<any> = [
    { name: '小明', age: 15 },
    { name: '小红', age: 16 },
    { name: '小兰', age: 15 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
