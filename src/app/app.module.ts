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
import { RentAgreementComponent } from './pages/docmentations/rent-agreement/rent-agreement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatChipsModule } from '@angular/material/chips';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { PowerOfAttorneyComponent } from './pages/docmentations/power-of-attorney/power-of-attorney.component';
import { BannerComponent } from './components/banner/banner.component';
import { DocumentationServicesComponent } from './components/documentation-services/documentation-services.component';
import { NameChangeAffidavitComponent } from './pages/docmentations/name-change-affidavit/name-change-affidavit.component';
import { AfterMarriageNameChangeAffidavitComponent } from './pages/docmentations/after-marriage-name-change-affidavit/after-marriage-name-change-affidavit.component';
import { RevocationPowerOfAttorneyComponent } from './pages/docmentations/revocation-power-of-attorney/revocation-power-of-attorney.component';
import { AddressProofAffidavitComponent } from './pages/docmentations/address-proof-affidavit/address-proof-affidavit.component';
import { SignatureChangeAffidavitComponent } from './pages/docmentations/signature-change-affidavit/signature-change-affidavit.component';
import { DobAffidavitComponent } from './pages/docmentations/dob-affidavit/dob-affidavit.component';
import { IncomeProofAffidavitComponent } from './pages/docmentations/income-proof-affidavit/income-proof-affidavit.component';
import { GasPipelineConnectionAffidavitComponent } from './pages/docmentations/gas-pipeline-connection-affidavit/gas-pipeline-connection-affidavit.component';
import { GasConnectionAffidavitComponent } from './pages/docmentations/gas-connection-affidavit/gas-connection-affidavit.component';
import { MarriageRegistrationAffidavitComponent } from './pages/docmentations/marriage-registration-affidavit/marriage-registration-affidavit.component';
import { DomicileAffidavitComponent } from './pages/docmentations/domicile-affidavit/domicile-affidavit.component';
import { FirstChildAffidavitComponent } from './pages/docmentations/first-child-affidavit/first-child-affidavit.component';
import { EducationLoanAffidavitComponent } from './pages/docmentations/education-loan-affidavit/education-loan-affidavit.component';
import { EducationalGapAffidavitComponent } from './pages/docmentations/educational-gap-affidavit/educational-gap-affidavit.component';
import { DuplicateMarklistAffidavitComponent } from './pages/docmentations/duplicate-marklist-affidavit/duplicate-marklist-affidavit.component';
import { OtherAffidavitComponent } from './pages/docmentations/other-affidavit/other-affidavit.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'documentation/rental-agreement', component: RentAgreementComponent},
  {path: 'documentation/power-of-attorney', component: PowerOfAttorneyComponent},
  {path: 'documentation/revoke-power-of-attorney', component: RevocationPowerOfAttorneyComponent},
  {path: 'documentation/name-change-affidavit', component: NameChangeAffidavitComponent},
  {path: 'documentation/address-proof-affidavit', component: AddressProofAffidavitComponent},
  {path: 'documentation/after-marriage-name-change-affidavit', component: AfterMarriageNameChangeAffidavitComponent},
  {path: 'documentation/signature-change-affidavit', component: SignatureChangeAffidavitComponent},
  {path: 'documentation/dob-affidavit', component: DobAffidavitComponent},
  {path: 'documentation/income-proof-affidavit', component: IncomeProofAffidavitComponent},
  {path: 'documentation/gas-pipeline-connection-affidavit', component: GasPipelineConnectionAffidavitComponent},
  {path: 'documentation/gas-connection-affidavit', component: GasConnectionAffidavitComponent},
  {path: 'documentation/marriage-registration-affidavit', component: MarriageRegistrationAffidavitComponent},
  {path: 'documentation/domicile-affidavit', component: DomicileAffidavitComponent},
  {path: 'documentation/first-child-affidavit', component: FirstChildAffidavitComponent},
  {path: 'documentation/education-load-affidavit', component: EducationLoanAffidavitComponent},
  {path: 'documentation/educational-gap-affidavit', component: EducationalGapAffidavitComponent},
  {path: 'documentation/duplicate-marklist-affidavit', component: DuplicateMarklistAffidavitComponent},
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
    EducationLoanAffidavitComponent,
    EducationalGapAffidavitComponent,
    DuplicateMarklistAffidavitComponent,
    OtherAffidavitComponent,
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
