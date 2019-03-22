import { Component, OnInit, Input, Output, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  @Input('customerName')
  userName: string; // 允許外部傳值進來做使用 // ('xxx') xxx是別名，外面用就使用xxx
  @Output()
  send: EventEmitter<any> = new EventEmitter(); // ('xxx') xxx是別名，外面用就使用xxx

  // @HostBinding/@HostListener 參考網址 => https://segmentfault.com/a/1190000008878888
  @HostBinding('style.color')
  bgColor = 'red'; // HostBinding 是属性装饰器，用来动态设置"宿主元素"的属性值。
  @HostListener('click', ['$event']) // 事件 // 通常是寫在directive
  whenClick(event) {
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

  doSend() {
    this.bgColor = 'green';
    this.send.emit('form hello component'); // $event
  }
}
