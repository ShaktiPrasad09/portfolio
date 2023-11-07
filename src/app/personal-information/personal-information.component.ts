import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Shakti Prasad Mishra'],
    ['DOB', '10/12/1998'],
    ['Work Exp', '2.8 Years'],
    ['Education', 'B.Tech (2020)'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 2.8 years of experience in software industry.',
    'Delivered all product within deadlines. Always eager to learn new technologies.',
    'Currently, working as Associate Software Engineer at Accenture.',
  ];
  constructor(){}
  ngOnInit(): void {

  }

}
