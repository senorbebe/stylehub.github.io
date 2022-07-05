import {Component} from '@angular/core';
import {EmailValidator, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http:HttpClient){}

  /*form: FormGroup;
  firstName: FormControl = new FormControl("", [Validators.required]);
  lastName: FormControl = new FormControl("", [Validators.required]);
  email: FormControl = new FormControl("", [Validators.required, Validators.email]);
  company: FormControl = new FormControl("", [Validators.required]);
  message: FormControl = new FormControl("", [Validators.required, Validators.maxLength(256)]);
  honeypot: FormControl = new FormControl("");
  submitted: boolean = false;
  isLoading: boolean = false;
  responseMessage: string | undefined;*/

  model: {firstName: string, lastName: string, email: string, company: string, message: string} = {firstName:'', lastName: '', email: '', company: '', message: ''}

  /*constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      company: this.company,
      message: this.message,
      honeypot: this.honeypot
    });
  }*/

  onSubmit() {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.http.post('https://formspree.io/f/xdobreab', { firstName: this.model.firstName, lastName: this.model.lastName, company: this.model.company, replyto: this.model.email, message: this.model.message },
    { 'headers': headers }).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  /*onSubmit() {

    if (this.form.status == "VALID" && this.honeypot.value == "") {
      this.form.disable(); // disable the form if it's valid to disable multiple submissions
      let formData: any = new FormData();
      formData.append("firstName", this.form.get("firstName")?.value);
      formData.append("lastName", this.form.get("lastName")?.value);
      formData.append("email", this.form.get("email")?.value);
      formData.append("company", this.form.get("company")?.value);
      formData.append("message", this.form.get("message")?.value);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http.post("https://script.google.com/macros/s/AKfycbzeBRHARoMvLiMp--q31l1L1MViWpYBUG4aa36a10sOMAqRJvzMu3ZKiDp_qztWyMx0/exec", formData).subscribe(
        (response) => {
          // choose the response message
          if (response == "success") { //if (response["result"] == "success") {
            this.responseMessage = "Vielen Dank für Ihre Nachricht, wir kommen in den nächsten 24 Stunden auf Sie zurück!";
          } else {
            this.responseMessage = "Upsi, da ist etwas schief gegangen.";
          }
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Upsi, da ist etwas schief gegangen.";
          this.form.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }*/

}
