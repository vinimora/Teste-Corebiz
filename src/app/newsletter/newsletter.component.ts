import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
const apiCorebiz = 'https://corebiz-test.herokuapp.com/api';
@Component({
selector: 'app-newsletter',
templateUrl: './newsletter.component.html',
styleUrls: ['./newsletter.component.css']
  })
export class NewsletterComponent implements OnInit {
  [x: string]: any;
  userEmails = new FormGroup({
  	primaryEmail: new FormControl('',[
    	Validators.required,
    	Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      primaryName: new FormControl('',[Validators.required])

  });
  get primEmail(){
 return this.userEmails.get('primaryEmail')
 }
 get primName(){
return this.userEmails.get('primaryName')
}

constructor() {}
  sent = false;
  showSuccess(){
  this.sent = true;
}

  backToForm(){
  this.sent = false;
  }
submitForm(ev : any){

const {
name: { value: nameValue },
email: { value: emailValue },
} = ev.target.elements;
const url = `${apiCorebiz}/v1/newsletter`;
const data = {
name: nameValue,
email: emailValue,
};
fetch(url, {
method: 'POST',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json'
},
body: JSON.stringify(data),
})
.then(r => r.json())
.then(r => {
this.showSuccess();
})
.catch(e => {
console.log('error', e);
})
ev.preventDefault();
return false;
}
ngOnInit(): void {

}

}
