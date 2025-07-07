import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  imports: [RouterModule, CommonModule, FormsModule],
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
   enviando = false;
   erro = false;

  onSubmit() {
    this.enviando = true;
    this.erro = false;
    this.mensagemEnviada = false;

    // Tentativa 1: Com proxy
    fetch('/api/send', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.form)
    })
    .then(res => {
      this.enviando = false;
      if (res.ok) {
        this.mensagemEnviada = true;
        this.form = { nome: '', email: '', assunto: '', mensagem: '' };
      } else {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
    })
    .catch(error => {
      console.warn('Proxy falhou, tentando URL direta:', error);
      
      // Tentativa 2: URL direta com no-cors
      fetch('https://contato-email-production.up.railway.app/', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.form)
      })
      .then(res => {
        if (!res.ok) throw new Error('Erro na resposta do servidor');
        return res.json();
      })
      .then(() => {
        this.enviando = false;
        this.mensagemEnviada = true;
        this.form = { nome: '', email: '', assunto: '', mensagem: '' };
      })
      .catch(finalError => {
        this.enviando = false;
        this.erro = true;
        console.error('Erro final:', finalError);
      });
    });
  }


}
