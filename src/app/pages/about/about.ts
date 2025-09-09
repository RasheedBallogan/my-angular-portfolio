import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  title1 = 'PERSONAL INFORMATION';
  name = 'Ballogan, Rasheed B.';
  age = 19;
  gender = 'Male';
  date_of_birth = 'November 2, 2005';
  place_of_birth = 'Baguio City';
  contact_number = '09150947154';
  address = 'Hydro 1, Camp6, Tuba, Benguet';

  title2 = 'EDUCATION';
  college = `June 2025 - Present <br>
             Bachelor of Science in Computer Science <br>
             University of Baguio <br>
             Baguio City`;

  title3 = 'AWARDS & RECOGNITION';
  awards = [
    'Best in Math - 2022',
    'Best Performance in OJT - 2023',
  ];

  title4 = 'SKILLS & TALENTS';
  skills = [
    'Playing Chess',
    'Solving Math',
    'Building a Pc '

  ];
}

