import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Attorney {
  name: string;
  title: string;
  description: string[];
  credentials: string[];
  photoUrl?: string;
}

@Component({
  selector: 'app-about',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
attorney: Attorney = {
    name: 'John Smith',
    title: 'John Smith, Esq.',
    description: [
      'With over 25 years of legal experience, Attorney John Smith has built a reputation as one of the most trusted legal advocates in the region. Specializing in criminal defense, personal injury, and corporate law, Mr. Smith has successfully represented hundreds of clients.',
      'His commitment to justice and unwavering dedication to his clients has earned him recognition from peers and numerous successful case outcomes. Every case is approached with meticulous attention to detail and aggressive advocacy.'
    ],
    credentials: [
      'Juris Doctor - Harvard Law School',
      'Licensed to practice in multiple states',
      'Member of State Bar Association',
      'Martindale-Hubbell AV Rated',
      'Super Lawyers Recognition'
    ]
  };
}
