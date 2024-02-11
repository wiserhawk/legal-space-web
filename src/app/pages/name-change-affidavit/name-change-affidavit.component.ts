import { Component } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'name-change-affidavit',
  templateUrl: './name-change-affidavit.component.html',
  styleUrls: ['./name-change-affidavit.component.css']
})
export class NameChangeAffidavitComponent {

  model: any = {};
  public error: boolean = false;
  public success: boolean = false;
  public sucessMessage!: string;
  public errorFields: string[] = [];

  public currentStep = 1;
  private maxStep = 2;

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
    else
      return this.validateAllSteps()
  }

  private validateAllSteps(): boolean {
    return this.validateStep1() || this.validateStep2()
  }

  private validateStep1() : boolean {
    this.error = false
    this.errorFields = []
    if (this.isEmpty(this.model.oldName)) {
      this.error = true
      this.errorFields.push('oldName')
    }
    if (this.isEmpty(this.model.newName)) {
      this.error = true
      this.errorFields.push('newName')
    }
    if (this.isEmpty(this.model.gender)) {
      this.error = true
      this.errorFields.push('gender')
    }
    if (this.isEmpty(this.model.dateOfBirth)) {
      this.error = true
      this.errorFields.push('dateOfBirth')
    }
    if (this.isEmpty(this.model.fatherName)) {
      this.error = true
      this.errorFields.push('fatherName')
    }
    if (this.isEmpty(this.model.document)) {
      this.error = true
      this.errorFields.push('document')
    }
    if (this.isEmpty(this.model.nameChangeOnPassport)) {
      this.error = true
      this.errorFields.push('nameChangeOnPassport')
    }
    return this.error;
  }

  private validateStep2(): boolean {
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
      oldName: this.model.oldName,
      newName: this.model.newName,
      gender: this.model.gender,
      dateOfBirth: this.model.dateOfBirth,
      fatherName: this.model.fatherName,
      document: this.model.document,
      yourName: this.model.yourName,
      email: this.model.email,
      phone: this.model.phone,
      deliveryAddress: this.model.deliveryAddress,
      nameChangeOnPassport: this.model.nameChangeOnPassport,
    }
  }

}
