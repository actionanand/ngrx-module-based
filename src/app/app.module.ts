import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { rootReducer } from './store/rootReducer';
import { CounterEffects } from './store/couter-store/counter.effects';

@NgModule({
  declarations: [AppComponent, CounterOutputComponent, CounterControlsComponent],
  imports: [BrowserModule, StoreModule.forRoot(rootReducer), EffectsModule.forRoot([CounterEffects])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
