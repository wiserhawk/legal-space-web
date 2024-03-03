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
import { BlogComponent } from './pages/blog/blog.component';
import { ConsultRequestComponent } from './pages/consult-request/consult-request.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { RentAgreementComponent } from './pages/rent-agreement/rent-agreement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatChipsModule } from '@angular/material/chips';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { PowerOfAttorneyComponent } from './pages/power-of-attorney/power-of-attorney.component';
import { BannerComponent } from './components/banner/banner.component';
import { DocumentationServicesComponent } from './components/documentation-services/documentation-services.component';
import { NameChangeAffidavitComponent } from './pages/name-change-affidavit/name-change-affidavit.component';
import { AfterMarriageNameChangeAffidavitComponent } from './pages/after-marriage-name-change-affidavit/after-marriage-name-change-affidavit.component';
import { RevocationPowerOfAttorneyComponent } from './pages/revocation-power-of-attorney/revocation-power-of-attorney.component';
import { AddressProofAffidavitComponent } from './pages/address-proof-affidavit/address-proof-affidavit.component';
import { SignatureChangeAffidavitComponent } from './pages/signature-change-affidavit/signature-change-affidavit.component';
import { DobAffidavitComponent } from './pages/dob-affidavit/dob-affidavit.component';
import { IncomeProofAffidavitComponent } from './pages/income-proof-affidavit/income-proof-affidavit.component';
import { GasPipelineConnectionAffidavitComponent } from './pages/gas-pipeline-connection-affidavit/gas-pipeline-connection-affidavit.component';
import { GasConnectionAffidavitComponent } from './pages/gas-connection-affidavit/gas-connection-affidavit.component';
import { MarriageRegistrationAffidavitComponent } from './pages/marriage-registration-affidavit/marriage-registration-affidavit.component';
import { DomicileAffidavitComponent } from './pages/domicile-affidavit/domicile-affidavit.component';
import { FirstChildAffidavitComponent } from './pages/first-child-affidavit/first-child-affidavit.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'rental-agreement', component: RentAgreementComponent},
  {path: 'power-of-attorney', component: PowerOfAttorneyComponent},
  {path: 'revoke-power-of-attorney', component: RevocationPowerOfAttorneyComponent},
  {path: 'name-change-affidavit', component: NameChangeAffidavitComponent},
  {path: 'address-proof-affidavit', component: AddressProofAffidavitComponent},
  {path: 'after-marriage-name-change-affidavit', component: AfterMarriageNameChangeAffidavitComponent},
  {path: 'signature-change-affidavit', component: SignatureChangeAffidavitComponent},
  {path: 'dob-affidavit', component: DobAffidavitComponent},
  {path: 'income-proof-affidavit', component: IncomeProofAffidavitComponent},
  {path: 'gas-pipeline-connection-affidavit', component: GasPipelineConnectionAffidavitComponent},
  {path: 'gas-connection-affidavit', component: GasConnectionAffidavitComponent},
  {path: 'marriage-registration-affidavit', component: MarriageRegistrationAffidavitComponent},
  {path: 'domicile-affidavit', component: DomicileAffidavitComponent},
  {path: 'first-child-affidavit', component: FirstChildAffidavitComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'blog/:name', component: BlogComponent},
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
    BlogComponent,
    ConsultRequestComponent,
    HowItWorksComponent,
    RentAgreementComponent,
    PageTitleComponent,
    BlogCardComponent,
    PowerOfAttorneyComponent,
    BannerComponent,
    DocumentationServicesComponent,
    NameChangeAffidavitComponent,
    AfterMarriageNameChangeAffidavitComponent,
    RevocationPowerOfAttorneyComponent,
    AddressProofAffidavitComponent,
    SignatureChangeAffidavitComponent,
    DobAffidavitComponent,
    IncomeProofAffidavitComponent,
    GasPipelineConnectionAffidavitComponent,
    GasConnectionAffidavitComponent,
    MarriageRegistrationAffidavitComponent,
    DomicileAffidavitComponent,
    FirstChildAffidavitComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule, 
    MatNativeDateModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
