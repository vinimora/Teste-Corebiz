import { Component, OnInit } from '@angular/core';
const apiCorebiz = 'https://corebiz-test.herokuapp.com/api';
@Component({
selector: 'app-newsletter',
templateUrl: './newsletter.component.html',
styleUrls: ['./newsletter.component.css']
  })
export class NewsletterComponent implements OnInit {

  constructor() { }
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
