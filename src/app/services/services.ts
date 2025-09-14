import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface LegalService {
  id: string;
  title: string;
  description: string;
  icon: string;
}
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
 services: LegalService[] = [
    {
      id: 'criminal',
      title: 'Criminal Defense',
      description: 'Aggressive defense for all criminal charges including DUI, assault, theft, drug crimes, and white-collar offenses. Protecting your freedom and future.',
      icon: '⚖️'
    },
    {
      id: 'personal-injury',
      title: 'Personal Injury',
      description: 'Maximum compensation for accident victims. Car accidents, slip and fall, medical malpractice, and wrongful death cases.',
      icon: '🏥'
    },
    {
      id: 'corporate',
      title: 'Corporate Law',
      description: 'Comprehensive business legal services including contracts, mergers, compliance, employment law, and litigation representation.',
      icon: '🏢'
    },
    {
      id: 'real-estate',
      title: 'Real Estate Law',
      description: 'Complete real estate legal services for buyers, sellers, and investors. Property disputes, closings, and zoning issues.',
      icon: '🏠'
    },
    {
      id: 'family',
      title: 'Family Law',
      description: 'Sensitive handling of divorce, custody, child support, adoption, and domestic relations matters with compassionate representation.',
      icon: '👨‍👩‍👧‍👦'
    },
    {
      id: 'estate',
      title: 'Estate Planning',
      description: 'Protect your legacy with comprehensive wills, trusts, probate administration, and estate planning strategies.',
      icon: '📋'
    }
  ];
}
