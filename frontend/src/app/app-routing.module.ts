import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TryComponent } from './try-component/try-component.component';
import { EqSolverComponent } from './eq-solver/eq-solver.component';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { VariableComponent } from './variable/variable.component';
import { SequenceComponent } from './sequence/sequence.component';

const routes: Routes = [
	{ path: 'tryit', component: TryComponent },
	{ path: 'solve', component: EqSolverComponent},
	{ path: 'new-worker', component: NewWorkerComponent},
	{ path: 'variable', component: VariableComponent},
	{ path: 'sequence', component: SequenceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
