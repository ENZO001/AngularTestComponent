import {
  Component, OnInit, Input, OnChanges, SimpleChanges,
  ChangeDetectionStrategy, ChangeDetectorRef, ContentChild, AfterContentInit, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-demo-life-cycle',
  templateUrl: './demo-life-cycle.component.html',
  styleUrls: ['./demo-life-cycle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoLifeCycleComponent implements OnInit, OnChanges, AfterContentInit, OnDestroy {

  @Input() data;

  @ContentChild('hahaContent') content; // 範本參考變數

  constructor(private cd: ChangeDetectorRef) { }

  // byValue: 傳值
  // byRef: 傳址

  // @Input有做改變就會跟著觸發 (ChangeDetectionStrategy.Default)
  // 要給一個全新的 ngOnChanges 才會被觸發 (ChangeDetectionStrategy.OnPush)
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
  }

  ngAfterContentInit(): void {
    console.log(this.content);
  }

  ngOnDestroy(): void {
    console.log('demo is destory');
  }
}
