import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Lab1HelloWorldComponent } from './lab-1-hello-world/lab-1-hello-world.component';
import { Lab2ComponentsComponent } from './lab-2-components/lab-2-components.component';
import { Lab3EventsRefComponent } from './lab-3-events-ref/lab-3-events-ref.component';
import { Lab4EventHandlersComponent } from './lab-4-event-handlers/lab-4-event-handlers.component';
import { Lab5ShareServicesDataComponent } from './lab-5-share-services-data/lab-5-share-services-data.component';
import { Lab6ProvideShareValuesComponent } from './lab-6-provide-share-values/lab-6-provide-share-values.component';
import {MailService} from "./services/mail.service";
import {SmsService} from "./services/sms.service";
import { Lab7LoopNgforComponent } from './lab-7-loop-ngfor/lab-7-loop-ngfor.component';
import { Lab8PassValueIntoComponentComponent } from './lab-8-pass-value-into-component/lab-8-pass-value-into-component.component';
import { Lab9TwoWayBindingComponent } from './lab-9-two-way-binding/lab-9-two-way-binding.component';
import { Lab8PassValueIntoComponentTargetComponent } from './lab-8-pass-value-into-component-target/lab-8-pass-value-into-component-target.component';
import { Lab9TwoWayBindingTargetComponent } from './lab-9-two-way-binding-target/lab-9-two-way-binding-target.component';
import { Lab10ComponentsWithOutputComponent } from './lab-10-components-with-output/lab-10-components-with-output.component';
import { Lab10ComponentsWithOutputTargetComponent } from './lab-10-components-with-output-target/lab-10-components-with-output-target.component';
import {QuestService} from "./services/quest.service";
import { Lab11CssInsideComponentsComponent } from './lab-11-css-inside-components/lab-11-css-inside-components.component';
import { Lab11CssInsideComponentsTargetComponent } from './lab-11-css-inside-components-target/lab-11-css-inside-components-target.component';
import { Lab12ApplyCssConditionallyComponent } from './lab-12-apply-css-conditionally/lab-12-apply-css-conditionally.component';
import { Lab12ApplyCssConditionallyTargetComponent } from './lab-12-apply-css-conditionally-target/lab-12-apply-css-conditionally-target.component';

@NgModule({
  declarations: [
    AppComponent,
    Lab1HelloWorldComponent,
    Lab2ComponentsComponent,
    Lab3EventsRefComponent,
    Lab4EventHandlersComponent,
    Lab5ShareServicesDataComponent,
    Lab6ProvideShareValuesComponent,
    Lab7LoopNgforComponent,
    Lab8PassValueIntoComponentComponent,
    Lab8PassValueIntoComponentTargetComponent,
    Lab9TwoWayBindingComponent,
    Lab9TwoWayBindingTargetComponent,
    Lab10ComponentsWithOutputComponent,
    Lab10ComponentsWithOutputTargetComponent,
    Lab11CssInsideComponentsComponent,
    Lab11CssInsideComponentsTargetComponent,
    Lab12ApplyCssConditionallyComponent,
    Lab12ApplyCssConditionallyTargetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    {provide: MailService, useClass: MailService},
    {provide: 'sms', useClass: SmsService},
    {provide: 'quest', useClass: QuestService},
    {provide: 'api', useValue: 'http://localhost:3000'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
