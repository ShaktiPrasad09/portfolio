import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Indira gandhi Institute Of Technology, Sarang",
      course: 'B.Tech',
      duration: '2016-2020',
      score: '78.9%',
    },
    {
      institute: 'B.J.B Junior Collage',
      course: 'CHSE',
      duration: '2015-2016',
      score: '70.8%',
    },
    {
      institute: 'Rtapalli Vidyapitha',
      course: 'HSC',
      duration: '2013-2014',
      score: '92.8%',
    }
  ];

  constructor(){}
  ngOnInit(): void {

  }
  
}
