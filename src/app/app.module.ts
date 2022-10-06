import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SecondComponent } from './second.components';
import { ThirdComponent } from './third.components';
import { FourthComponent } from './fourth.components';
import { FifthComponent } from './fifth.components';
import { RouterModule, Routes } from '@angular/router';

const myRoutes: Routes = [
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'fourth', component: FourthComponent },
  { path: 'fifth', component: FifthComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
