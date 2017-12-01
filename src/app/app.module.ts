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

import { EmployeeComponent } from './employee/employee.component';
import { employeeReducer } from './reducers/employee.reducer';
import { EmployeeEffects } from './effects/employee.effects';
import { EmployeeService } from './employee/employee.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AdvanceComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ advance: advanceReducer, employee: employeeReducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([AdvanceEffects, EmployeeEffects])
  ],
  providers: [
    AdvanceService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
