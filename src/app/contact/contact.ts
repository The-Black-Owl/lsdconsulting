import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface ContactInfo {
  type: string;
  label: string;
  value: string;
  icon: string;
}

interface ContactFormData {
  name: string;
  email: string;
  whatsapp?: string;
  service: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
contactForm: FormGroup;
  showSuccessMessage = false;

  services = [
    { value: '', label: 'Select a service' },
    { value: 'criminal', label: 'Criminal Defense' },
    { value: 'personal-injury', label: 'Personal Injury' },
    { value: 'corporate', label: 'Corporate Law' },
    { value: 'real-estate', label: 'Real Estate Law' },
    { value: 'family', label: 'Family Law' },
    { value: 'estate', label: 'Estate Planning' },
    { value: 'other', label: 'Other' }
  ];

  contactInfo: ContactInfo[] = [
    {
      type: 'email',
      label: 'Email',
      value: 'info@smithlawfirm.com',
      icon: '📧'
    },
    {
      type: 'whatsapp',
      label: 'WhatsApp',
      value: '+1 (555) 123-4567',
      icon: '📱'
    },
    {
      type: 'phone',
      label: 'Phone',
      value: '+1 (555) 987-6543',
      icon: '📞'
    },
    {
      type: 'address',
      label: 'Office',
      value: '123 Legal Plaza, Suite 500\nDowntown, State 12345',
      icon: '📍'
    },
    {
      type: 'hours',
      label: 'Hours',
      value: 'Mon-Fri: 8:00 AM - 6:00 PM\n24/7 Emergency Line Available',
      icon: '🕒'
    }
  ];

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      whatsapp: [''],
      service: [''],
      message: ['', Validators.maxLength(500)]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData: ContactFormData = this.contactForm.value;
      
      // Here you would typically send the data to your backend service
      console.log('Form submitted:', formData);
      
      // Show success message
      this.showSuccessMessage = true;
      
      // Reset form
      this.contactForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  getErrorMessage(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address';
      }
      if (field.errors['minlength']) {
        return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${field.errors['minlength'].requiredLength} characters`;
      }
      if (field.errors['maxlength']) {
        return `Message cannot exceed ${field.errors['maxlength'].requiredLength} characters`;
      }
    }
    return '';
  }
}
