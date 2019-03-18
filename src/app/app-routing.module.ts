import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

const routes: Routes = [
  {path: 'first', component: FirstComponent},
  {path: 'lifeCycle', component: LifeCycleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
