import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from '@uirouter/angular';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';

import { appRoutes } from './routes';
// import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegComponent } from './components/-reg/-reg.component';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './components/-login/-login.component';
// import { HttpCachedComponent } from './components/http-cached/http-cached.component';
// import { FlashcardService } from './service/flashcard.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegComponent,
    // HttpCachedComponent
   ],
  providers: [
    AuthService
    // FlashcardService
    
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
