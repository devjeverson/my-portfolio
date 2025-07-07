import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

@Component({
  selector: 'app-contacts',
  imports: [RouterModule, CommonModule, FormsModule, NgxCaptchaModule],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

   form = {
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  };

   mensagemEnviada = false;

  /*onSubmit() {
    

    const templateParams = {
      from_name: this.form.nome,
      from_email: this.form.email,
      subject: this.form.assunto,
      message: this.form.mensagem,
    };
  }*/

  onSubmit() {
    fetch('https://contato-email-production.up.railway.app/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(this.form)
  })
  .then(res => {
    if (res.ok) {
      this.mensagemEnviada = true;
      this.form = { nome: '', email: '', assunto: '', mensagem: '' };
    } else {
      alert('Erro ao enviar mensagem.');
    }
  });
}


}
