import { Component } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'revocation-power-of-attorney',
  templateUrl: './revocation-power-of-attorney.component.html',
  styleUrls: ['./revocation-power-of-attorney.component.css']
})
export class RevocationPowerOfAttorneyComponent {

  model: any = {};
  public error: boolean = false;
  public success: boolean = false;
  public sucessMessage!: string;
  public errorFields: string[] = [];

  public currentStep = 1;
  private maxStep = 3;

  public constructor(private emailService: EmailService) {}

  public next() {
    if (!this.error) {
      this.currentStep = (this.currentStep < this.maxStep) ? this.currentStep+1 : this.maxStep
    }
  }

  public back() {
    this.currentStep = (this.currentStep > 1) ? this.currentStep-1 : 1;
    this.error = false;
  }

  async onSubmit() {
    if (!this.validateContactDetails()) {  
      this.emailService.sendEmail(this.model);
      this.success = true
      //Just setting a greater number.
      this.currentStep = 1000
      //Reset model
      this.model = {}
    }
  }

  private validateContactDetails(): boolean {
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
      dateToRevokePOA: this.model.dateToRevokePOA,
      purpose: this.model.purpose,
      residentialStatus: this.model.residentialStatus,
      poaType: this.model.poaType,
      isPoaRegistered: this.model.isPoaRegistered,
      startDateOfPOA: this.model.startDateOfPOA,
      registrationNumber: this.model.registrationNumber,
      bookNumber: this.model.bookNumber,
      volumeNumber: this.model.volumeNumber,
      pageNumber: this.model.pageNumber,
      placeOfReg: this.model.placeOfReg,
      principalName: this.model.principalName,
      attorneyName: this.model.attorneyName,
      yourName: this.model.yourName,
      email: this.model.email,
      phone: this.model.phone,
      deliveryAddress: this.model.deliveryAddress,
    }
  }

}
