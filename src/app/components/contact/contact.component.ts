import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  contactInfo = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Adres',
      content: 'Kahramanmaraş, Türkiye',
      link: null
    },
    {
      icon: 'fas fa-phone',
      title: 'Telefon',
      content: '+90 533 422 11 43',
      link: 'tel:+905334221143'
    },
    {
      icon: 'fas fa-envelope',
      title: 'E-posta',
      content: 'info@arikcainsaat.com',
      link: 'mailto:info@arikcainsaat.com'
    },
    {
      icon: 'fas fa-clock',
      title: 'Çalışma Saatleri',
      content: 'Pzt - Cmt: 09:00 - 18:00',
      link: null
    }
  ];

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Form gönderme işlemi burada yapılacak
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    this.resetForm();
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}
