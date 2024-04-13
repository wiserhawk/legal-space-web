import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { PageTitleComponent } from 'src/app/components/page-title/page-title.component';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-rent-agreement',
  templateUrl: './rent-agreement.component.html',
  styleUrls: ['./rent-agreement.component.css']
})
export class RentAgreementComponent {


  model: any = {};
  public error: boolean = false;
  public success: boolean = false;
  public sucessMessage!: string;
  public errorFields: string[] = [];

  public currentStep = 1;
  private maxStep = 5;

  public constructor(private emailService: EmailService) {}

  public next() {
    this.validateCurrentStep()
    if (!this.error) {
      this.currentStep = (this.currentStep < this.maxStep) ? this.currentStep+1 : this.maxStep
    }
  }

  public back() {
    this.currentStep = (this.currentStep > 1) ? this.currentStep-1 : 1;
  }

  async onSubmit() {
    if (!this.validateAllSteps()) {
      this.emailService.sendEmail(this.model);
      this.success = true
      //Just setting a greater number.
      this.currentStep = 1000
      //Reset model
      this.model = {}
    }
  }

  private validateCurrentStep(): boolean {
    if (this.currentStep == 1)
      return this.validateStep1()
    else if (this.currentStep == 2)
      return this.validateStep2()
    else if (this.currentStep == 3)
      return this.validateStep3()
    else if (this.currentStep == 4)
      return this.validateStep4()
    else if (this.currentStep == 5)
      return this.validateStep5()
    else
      return this.validateAllSteps()
  }

  private validateAllSteps(): boolean {
    return this.validateStep1() || this.validateStep2() || 
          this.validateStep3() || this.validateStep4() || this.validateStep5()
  }

  private validateStep1() : boolean {
    this.error = false
    this.errorFields = []
    if (this.isEmpty(this.model.rentalType)) {
      this.error = true
      this.errorFields.push('rentalType')
    }
    if (this.isEmpty(this.model.durationType)) {
      this.error = true
      this.errorFields.push('durationType')
    }
    if (this.isEmpty(this.model.propertyType)) {
      this.error = true
      this.errorFields.push('propertyType')
    }
    if (this.isEmpty(this.model.whoAreYou)) {
      this.error = true
      this.errorFields.push('whoAreYou')
    }
    if (this.isEmpty(this.model.startDate)) {
      this.error = true
      this.errorFields.push('startDate')
    }
    if (this.isEmpty(this.model.duration)) {
      this.error = true
      this.errorFields.push('duration')
    }
    return this.error;
  }

  private validateStep2(): boolean {
    this.error = false
    this.errorFields = []
    if (this.isEmpty(this.model.landlordName)) {
      this.error = true
      this.errorFields.push('landlordName')
    }
    if (this.isEmpty(this.model.landlordAddress)) {
      this.error = true
      this.errorFields.push('landlordAddress')
    }
    return this.error
  }

  private validateStep3(): boolean {
    this.error = false
    this.errorFields = []
    if (this.isEmpty(this.model.tenantName)) {
      this.error = true
      this.errorFields.push('tenantName')
    }
    if (this.isEmpty(this.model.tenantAddress)) {
      this.error = true
      this.errorFields.push('tenantAddress')
    }
    return this.error
  }

  private validateStep4(): boolean {
    this.error = false
    this.errorFields = []
    if (this.isEmpty(this.model.propertyAddress)) {
      this.error = true
      this.errorFields.push('propertyAddress')
    }
    if (this.isEmpty(this.model.propertyRent)) {
      this.error = true
      this.errorFields.push('propertyRent')
    }
    return this.error
  }

  private validateStep5(): boolean {
    this.error = false
    this.errorFields = []
    if (this.isEmpty(this.model.yourName)) {
      this.error = true
      this.errorFields.push('yourName')
    }
    if (this.isEmpty(this.model.email)) {
      this.error = true
      this.errorFields.push('email')
    }
    if (this.isEmpty(this.model.phone)) {
      this.error = true
      this.errorFields.push('phone')
    }
    if (this.isEmpty(this.model.deliveryAddress)) {
      this.error = true
      this.errorFields.push('deliveryAddress')
    }
    return this.error
  }

  private isEmpty(str: string): boolean {
    return str === null || str === undefined || str.length === 0;
  }

  private createMessage() {
    return {
      rentalType: this.model.rentalType,
      durationType: this.model.durationType,
      propertyType: this.model.propertyType,
      whoAreYou: this.model.whoAreYou,
      startDate: this.model.startDate,
      duration: this.model.duration,
      landlordName: this.model.landlordName,
      landlordAddress: this.model.landlordAddress,
      tenantName: this.model.tenantName,
      tenantAddress: this.model.tenantAddress,
      propertyAddress: this.model.propertyAddress,
      propertyRent: this.model.propertyRent,
      yourName: this.model.yourName,
      email: this.model.email,
      phone: this.model.phone,
      deliveryAddress: this.model.deliveryAddress,
      additinalTermsConditions: this.model.additinalTermsConditions,
    }
  }

}
