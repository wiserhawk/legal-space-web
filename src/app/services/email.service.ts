import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailjs_pub_key = 'EDA4gIx0bz7Y03Ek7';
  private emailjs_service_id = 'service_98jd1gl';
  private emailjs_template_id = 'template_zmnon2q';

  constructor() { }

  public async sendEmail(data: any): Promise<any> {
    emailjs.init(this.emailjs_pub_key);
    var payload = this.stringfyPayload(data);
    alert(payload);
    //var res = await emailjs.send(this.emailjs_service_id, this.emailjs_template_id, payload);
  }

  private stringfyPayload(data: any): string {
    return JSON.stringify(data);
  }

}
