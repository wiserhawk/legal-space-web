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
import { ConsulationRequestComponent } from './components/consulation-request/consulation-request.component';
import { FormsModule } from '@angular/forms';
import { BlogComponent } from './pages/blog/blog.component';
import { ConsultRequestComponent } from './pages/consult-request/consult-request.component';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import { RentAgreementComponent } from './components/documentations/rent-agreement/rent-agreement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatChipsModule } from '@angular/material/chips';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { PowerOfAttorneyComponent } from './components/documentations/power-of-attorney/power-of-attorney.component';
import { BannerComponent } from './components/banner/banner.component';
import { DocumentationServicesComponent } from './components/documentation-services/documentation-services.component';
import { NameChangeAffidavitComponent } from './components/documentations/name-change-affidavit/name-change-affidavit.component';
import { AfterMarriageNameChangeAffidavitComponent } from './components/documentations/after-marriage-name-change-affidavit/after-marriage-name-change-affidavit.component';
import { RevocationPowerOfAttorneyComponent } from './components/documentations/revocation-power-of-attorney/revocation-power-of-attorney.component';
import { AddressProofAffidavitComponent } from './components/documentations/address-proof-affidavit/address-proof-affidavit.component';
import { SignatureChangeAffidavitComponent } from './components/documentations/signature-change-affidavit/signature-change-affidavit.component';
import { DobAffidavitComponent } from './components/documentations/dob-affidavit/dob-affidavit.component';
import { IncomeProofAffidavitComponent } from './components/documentations/income-proof-affidavit/income-proof-affidavit.component';
import { GasPipelineConnectionAffidavitComponent } from './components/documentations/gas-pipeline-connection-affidavit/gas-pipeline-connection-affidavit.component';
import { GasConnectionAffidavitComponent } from './components/documentations/gas-connection-affidavit/gas-connection-affidavit.component';
import { MarriageRegistrationAffidavitComponent } from './components/documentations/marriage-registration-affidavit/marriage-registration-affidavit.component';
import { DomicileAffidavitComponent } from './components/documentations/domicile-affidavit/domicile-affidavit.component';
import { FirstChildAffidavitComponent } from './components/documentations/first-child-affidavit/first-child-affidavit.component';
import { EducationLoanAffidavitComponent } from './components/documentations/education-loan-affidavit/education-loan-affidavit.component';
import { EducationalGapAffidavitComponent } from './components/documentations/educational-gap-affidavit/educational-gap-affidavit.component';
import { DuplicateMarklistAffidavitComponent } from './components/documentations/duplicate-marklist-affidavit/duplicate-marklist-affidavit.component';
import { OtherAffidavitComponent } from './components/documentations/other-affidavit/other-affidavit.component';
import { LegalServicesComponent } from './components/legal-services/legal-services.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { DocumentationsComponent } from './pages/documentations/documentations.component';
import { LegalServicesPageComponent } from './pages/legal-services-page/legal-services-page.component';
import { DocumentationsBannerComponent } from './components/documentations-banner/documentations-banner.component';
import { LegalServicesBannerComponent } from './components/legal-services-banner/legal-services-banner.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { DisclaimerComponent } from './pages/disclaimer/disclaimer.component';
import { WillComponent } from './components/documentations/will/will.component';
import { GiftDeedComponent } from './components/documentations/gift-deed/gift-deed.component';
import { SaleDeedComponent } from './components/documentations/sale-deed/sale-deed.component';

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
  {path: 'documentation/other-affidavit', component: OtherAffidavitComponent},
  {path: 'documentation/will', component: WillComponent},
  {path: 'documentation/gift-deed', component: GiftDeedComponent},
  {path: 'documentation/sale-deed', component: SaleDeedComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'blogs', component: BlogsComponent},
  {path: 'blog/:name', component: BlogComponent},
  {path: 'consultation-request', component: ConsultRequestComponent},
  {path: 'documentations', component: DocumentationsComponent},
  {path: 'legal-services', component: LegalServicesPageComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'disclaimer', component: DisclaimerComponent},
] 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
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
    LegalServicesComponent,
    BlogsComponent,
    DocumentationsComponent,
    LegalServicesPageComponent,
    DocumentationsBannerComponent,
    LegalServicesBannerComponent,
    AboutUsComponent,
    DisclaimerComponent,
    WillComponent,
    GiftDeedComponent,
    SaleDeedComponent,
  ],
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
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
