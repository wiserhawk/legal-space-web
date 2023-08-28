import { Component, ElementRef, ViewChild } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'consulation-request',
  templateUrl: './consulation-request.component.html',
  styleUrls: ['./consulation-request.component.css']
})
export class ConsulationRequestComponent {

  model: any = {};
  public error: boolean = false;
  public errName: boolean = false;
  public errPhone: boolean = false;
  public errEmail: boolean = false;
  public errMessage: boolean = false;
  public errMain: boolean = false;
  public errMsgName!: string;
  public errMsgPhone!: string;
  public errMsgEmail!: string;
  public errMsgMessage!: string;
  public errMsgMain!: string;
  private emailjs_pub_key = 'EDA4gIx0bz7Y03Ek7';
  
  @ViewChild('toast')  toast!: ElementRef;

  public constructor() {}

  async onSubmit() {
    this.clearErrorState();
    if (this.validateInput(this.model)) {
      this.clearErrorState();
      // emailjs.init(this.emailjs_pub_key);
      // let res = await emailjs.send("service_98jd1gl","template_zmnon2q",{
      //   name: this.model.name,
      //   message: this.model.message,
      //   phone: this.model.phone,
      //   email: this.model.email,
      // });

      //alert('Your request has been successfully sumbitted!')
      this.toast.nativeElement.style.display="block";
      //Reset model
      this.model = {};
    }
  }


  private validateInput(model: any): boolean {
    if (!model|| !this.model.name) {
      this.errMsgName = "Name is a required field.";
      this.errName = true;
      this.error = true;
    }
    if (!model|| !this.model.phone) {
      this.errMsgPhone = "Phone number is a required field.";
      this.errPhone = true;
      this.error = true;
    }
    if (model && this.model.phone && !this.numberOnly(this.model.phone)) {
      this.errMsgPhone = "Phone number must be 10 digits number.";
      this.errPhone = true;
      this.error = true;
    }
    if (!model || !this.model.email) {
      this.errMsgEmail = "Email is a required field.";
      this.errEmail = true
      this.error = true;
    }
    if (model && this.model.email && !this.emailOnly(this.model.email)) {
      this.errMsgEmail = "Email mush be a valid email.";
      this.errEmail = true
      this.error = true;
    }
    if (!model|| !this.model.message) {
      this.errMsgMessage = "Message is a required field.";
      this.errMessage = true;
      this.error = true;
    }
    if (this.error) {
      return false;
    }
    return true;
  }

  private clearErrorState() {
    this.error = false;
    this.errName = false;
    this.errPhone = false;
    this.errEmail = false;
    this.errMessage = false;
    this.errMain = false;
    this.errMsgName = '';
    this.errMsgPhone = '';
    this.errMsgEmail = '';
    this.errMsgMessage = '';
    this.errMsgMain = '';
  }

  private numberOnly(value: any): boolean {
    const val = String(value)
    if (val.length < 10) {
      return false
    }
    const zero = '0'.charCodeAt(0)
    const nine = '9'.charCodeAt(0)
    for (let char of val) {
      const v = char.charCodeAt(0)
      if (v < zero || v > nine) {
        return false
      }
    }
    return true
  }

  private emailOnly(value: string) : boolean {
    const EMAIL_REGEXP = /^(?!\.)[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return EMAIL_REGEXP.test(value);
  }


}
