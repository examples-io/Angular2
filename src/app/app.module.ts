import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { EventsRefsComponent } from './events-refs/events-refs.component';
import { EventHandlersComponent } from './event-handlers/event-handlers.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    EventsRefsComponent,
    EventHandlersComponent,
    DependencyInjectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
