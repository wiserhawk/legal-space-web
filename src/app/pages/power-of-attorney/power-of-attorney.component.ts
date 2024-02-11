import { Component } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-power-of-attorney',
  templateUrl: './power-of-attorney.component.html',
  styleUrls: ['./power-of-attorney.component.css']
})
export class PowerOfAttorneyComponent {

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
    if (this.isEmpty(this.model.purpose)) {
      this.error = true
      this.errorFields.push('purpose')
    }
    if (this.isEmpty(this.model.residentialStatus)) {
      this.error = true
      this.errorFields.push('residentialStatus')
    }
    if (this.isEmpty(this.model.reason)) {
      this.error = true
      this.errorFields.push('reason')
    }
    if (this.isEmpty(this.model.startDate)) {
      this.error = true
      this.errorFields.push('startDate')
    }
    return this.error;
  }

  private validateStep2(): boolean {
    this.error = false
    this.errorFields = []
    if (this.isEmpty(this.model.principalName)) {
      this.error = true
      this.errorFields.push('principalName')
    }
    if (this.isEmpty(this.model.principalFatherName)) {
      this.error = true
      this.errorFields.push('principalFatherName')
    }
    if (this.isEmpty(this.model.principalAge)) {
      this.error = true
      this.errorFields.push('principalAge')
    }
    if (this.isEmpty(this.model.principalGender)) {
      this.error = true
      this.errorFields.push('principalGender')
    }
    if (this.isEmpty(this.model.principalAddress)) {
      this.error = true
      this.errorFields.push('principalAddress')
    }
    if (this.isEmpty(this.model.principalCountry)) {
      this.error = true
      this.errorFields.push('principalCountry')
    }
    return this.error
  }

  private validateStep3(): boolean {
    this.error = false
    this.errorFields = []
    if (this.isEmpty(this.model.attorneyName)) {
      this.error = true
      this.errorFields.push('attorneyName')
    }
    if (this.isEmpty(this.model.attorneyFatherName)) {
      this.error = true
      this.errorFields.push('attorneyFatherName')
    }
    if (this.isEmpty(this.model.attorneyAge)) {
      this.error = true
      this.errorFields.push('attorneyAge')
    }
    if (this.isEmpty(this.model.attorneyGender)) {
      this.error = true
      this.errorFields.push('attorneyGender')
    }
    if (this.isEmpty(this.model.attorneyAddress)) {
      this.error = true
      this.errorFields.push('attorneyAddress')
    }
    return this.error
  }

  private validateStep4(): boolean {
    this.error = false
    this.errorFields = []
    if (this.isEmpty(this.model.isLimitedTimePOA)) {
      this.error = true
      this.errorFields.push('isLimitedTimePOA')
    }
    if (this.isEmpty(this.model.isDurablePOA)) {
      this.error = true
      this.errorFields.push('isDurablePOA')
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
      purpose: this.model.purpose,
      residentialStatus: this.model.residentialStatus,
      reason: this.model.reason,
      startDate: this.model.startDate,
      placeOfReg: this.model.placeOfReg,
      principalName: this.model.principalName,
      principalFatherName: this.model.principalFatherName,
      principalAge: this.model.principalAge,
      principalGender: this.model.principalGender,
      principalAddress: this.model.principalAddress,
      principalCountry: this.model.principalCountry,
      attorneyName: this.model.attorneyName,
      attorneyFatherName: this.model.attorneyFatherName,
      attorneyAge: this.model.attorneyAge,
      attorneyGender: this.model.attorneyGender,
      attorneyAddress: this.model.attorneyAddress,
      isLimitedTimePOA: this.model.isLimitedTimePOA,
      isDurablePOA: this.model.isDurablePOA,
      additinalTermsConditions: this.model.additinalTermsConditions,
      yourName: this.model.yourName,
      email: this.model.email,
      phone: this.model.phone,
      deliveryAddress: this.model.deliveryAddress,
    }
  }

}
