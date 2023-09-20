import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiceOfferingsComponent } from './components/service-offerings/service-offerings.component';
import { ConsulationRequestComponent } from './components/consulation-request/consulation-request.component';
import { FormsModule } from '@angular/forms';
import { ServiceComponent } from './pages/service/service.component';
import { ConsultRequestComponent } from './pages/consult-request/consult-request.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'service/:name', component: ServiceComponent},
  {path: 'consultation-request', component: ConsultRequestComponent}
] 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ServiceOfferingsComponent,
    ConsulationRequestComponent,
    ServiceComponent,
    ConsultRequestComponent,
    HowItWorksComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
