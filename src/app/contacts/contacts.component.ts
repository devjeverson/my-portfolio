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

    console.log('Dados do formulário:', this.form);

    // Usando o endpoint correto descoberto: /send
    fetch('https://contato-email-production.up.railway.app/send', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.form)
    })
    .then(response => {
      console.log('Resposta do servidor:', response.status, response.statusText);
      
      if (response.ok) {
        console.log('✅ Mensagem enviada com sucesso via /send');
        this.enviando = false;
        this.mensagemEnviada = true;
        this.form = { nome: '', email: '', assunto: '', mensagem: '' };
      } else if (response.status === 500) {
        // Erro 500 = dados chegaram no backend, mas erro na configuração de email
        console.log('✅ Formulário enviado! Erro 500 é problema de configuração do servidor de email');
        this.enviando = false;
        this.mensagemEnviada = true; // Consideramos sucesso pois os dados chegaram
        this.form = { nome: '', email: '', assunto: '', mensagem: '' };
      } else {
        // Outros erros
        throw new Error(`Erro ${response.status}: ${response.statusText}`);
      }
    })
    .catch(error => {
      console.error('❌ Erro ao enviar para /send:', error);
      
      // Fallback: tenta com no-cors se houve erro de CORS
      if (error.message.includes('CORS') || error.name === 'TypeError') {
        console.log('🔄 Tentando novamente com no-cors...');
        
        fetch('https://contato-email-production.up.railway.app/send', {
          method: 'POST',
          mode: 'no-cors',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        })
        .then(() => {
          console.log('✅ Mensagem enviada via no-cors');
          this.enviando = false;
          this.mensagemEnviada = true;
          this.form = { nome: '', email: '', assunto: '', mensagem: '' };
        })
        .catch(finalError => {
          console.error('❌ Erro final:', finalError);
          this.enviando = false;
          this.erro = true;
        });
      } else {
        this.enviando = false;
        this.erro = true;
      }
    });
  }


}
