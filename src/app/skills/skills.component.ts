import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'JAVA',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Spring Boot',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Angular, Angular Material',
      level: 'Intermediate',
      rating: 60,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Python',
      level: 'Intermediate',
      rating: 70,
    },
    {
      name: 'Jenkins, Grafana, GitHub Actions',
      level: 'Beginner',
      rating: 45,
    },
  ];
  constructor() {}
  ngOnInit(): void { }

}
