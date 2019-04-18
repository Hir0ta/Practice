import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TryComponent } from './try-component/try-component.component';
import { EqSolverComponent } from './eq-solver/eq-solver.component';
import { NewWorkerComponent } from './new-worker/new-worker.component';
import { VariableComponent } from './variable/variable.component';
import { SequenceComponent } from './sequence/sequence.component';

@NgModule({
  declarations: [
    AppComponent,
    TryComponent,
    EqSolverComponent,
    NewWorkerComponent,
    VariableComponent,
    SequenceComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
