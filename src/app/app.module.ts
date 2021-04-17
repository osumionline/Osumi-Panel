import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetPassComponent } from './pages/set-pass/set-pass.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { ConfigComponent } from './pages/config/config.component';
import { CodeComponent } from './pages/code/code.component';
import { ModelComponent } from './pages/model/model.component';
import { PluginsComponent } from './pages/plugins/plugins.component';
import { UpdatesComponent } from './pages/updates/updates.component';

@NgModule({
  declarations: [
    AppComponent,
    SetPassComponent,
    LoginComponent,
    MainComponent,
    ConfigComponent,
    CodeComponent,
    ModelComponent,
    PluginsComponent,
    UpdatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
