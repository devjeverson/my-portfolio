import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
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
  captchaValid = false;

  // Substitua com suas chaves EmailJS
  private SERVICE_ID = 'seu_service_id';
  private TEMPLATE_ID = 'seu_template_id';
  private PUBLIC_KEY = 'seu_public_key';

  onSubmit() {
    if (!this.captchaValid) {
      alert('Por favor, confirme o CAPTCHA.');
      return;
    }

    const templateParams = {
      from_name: this.form.nome,
      from_email: this.form.email,
      subject: this.form.assunto,
      message: this.form.mensagem,
    };

    emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, templateParams, this.PUBLIC_KEY)
      .then(() => {
        this.mensagemEnviada = true;
        this.form = { nome: '', email: '', assunto: '', mensagem: '' };
        setTimeout(() => this.mensagemEnviada = false, 5000);
      })
      .catch(error => {
        console.error('Erro ao enviar e-mail:', error);
        alert('Erro ao enviar mensagem. Tente novamente.');
      });
  }

  resolvedCaptcha(token: any): void {
    this.captchaValid = !token;
  }

}
