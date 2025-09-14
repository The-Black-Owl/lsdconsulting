import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {
heroContent = {
    title: 'Expert Legal Representation',
    subtitle: 'Protecting your rights with 25+ years of experience in criminal defense, personal injury, and corporate law. Your trusted advocate in complex legal matters.',
    ctaText: 'Get Free Consultation'
  };

  scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
