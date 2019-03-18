import { DemoLifeCycleComponent } from '../demo-life-cycle/demo-life-cycle.component';
import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  ViewChild,
  ViewChildren,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css'],
  encapsulation: ViewEncapsulation.None // 這個設定為style顯示的位置。Emulated有掛selector / None什麼都沒有，會影響到其他人
})
export class LifeCycleComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() { }

  name = 'Angular';
  data = { name: '' };
  show = true;

  // ========= @ViewChild 取到的是第一個 =========
  // 1. 文字 template ref #fuck
  @ViewChild('fuck') _fuck: ElementRef;
  // 2. 直接塞型別，取得該component
  @ViewChild(DemoLifeCycleComponent) _demoComponent: DemoLifeCycleComponent;
  // ============================================

  // ========= @ViewChildren 取多個 =========
  @ViewChildren(DemoLifeCycleComponent) _demoComponentList: QueryList<DemoLifeCycleComponent>

  assignData() {
    this.data = { ...this.data };
  }

  // trigger on input changes
  // 跟 ChangeDetectionStragety: Default/OnPush
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit() {
  }

  // repeat on every change detect
  ngDoCheck(): void {
    console.log('>>>>>>>>>>> ngDoCheck');
  }

  ngAfterContentInit(): void {
  }

  // repeat on every change detect
  ngAfterContentChecked(): void {
    console.log('>>>>>>>>>>> ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log(this._fuck);
    console.log(this._demoComponent.data);
    console.log(this._demoComponentList);
  }

  // repeat on every change detect
  ngAfterViewChecked(): void {
    console.log('>>>>>>>>>>> ngAfterViewChecked');
  }

  ngOnDestroy(): void {
  }

}
