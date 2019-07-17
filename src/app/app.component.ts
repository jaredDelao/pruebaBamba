import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  column1: string[] = [
    'SKYPE: @bambaexperience',
    'MEX: +52 55 4161 1721', 
    'USA: +1 888 544 4781',
    'UK: +44 20 3936 5072',
    'DE: +49 30 8967 79790'
  ];

  column2: string[] = [
    'About Us',
    'Why travel with bamba', 
    'Animal welfare',
    'Sustainable tourism',
    'Partners & associations'
  ];

  column3: string[] = [
    'FAQ',
    'Press Release', 
    'Travel Brochure',
    'Happy Nomad Blog',
    'Bamba for good'
  ];

  column4: string[] = [
    'Privacy Policy',
    'Terms & Conditions', 
    'Site Map',
  ];
}
