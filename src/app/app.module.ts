import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AdvanceService } from './advance/advance.service';
import { AdvanceComponent } from './advance/advance.component';
import { advanceReducer } from './reducers/advance.reducer';
import { AdvanceEffects } from './effects/advance.effects';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AdvanceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ advance: advanceReducer }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AdvanceEffects])
  ],
  providers: [
    AdvanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
