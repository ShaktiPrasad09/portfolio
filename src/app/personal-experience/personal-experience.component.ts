import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-personal-experience',
  templateUrl: './personal-experience.component.html',
  styleUrls: ['./personal-experience.component.css']
})
export class PersonalExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Associate Software Engineer',
      company: 'Accenture',
      duration: 'Apr 2022 - Now',
      description: [
        'Developed a user-friendly ticket management portal to streamline issue reporting and resolution using JavaScript.',
        'Created a monitoring dashboard in Grafana by writing SQL queries to track and visualize Continuous Integration and Continuous Deployment deployments, improving project visibility.',
        'Recognized the need for automation to ensure the timely closure of open ServiceNow changes, enhancing operational efficiency and ensuring compliance with change management policies. Developed a Python script to automate the process.',
        'Customized and implemented CI/CD workflows for different projects using GitHub Actions YAML configurations to streamline software development and deployment processes.',
        'Took the lead in ensuring successful installations of application releases into production environments, managing deployment processes and ensuring minimal disruptions.',
      ],
    },
    {
      role: 'Junior Software Engineer',
      company: 'Molecular Connections Pvt Ltd',
      duration: 'May 2021 - Apr 2022',
      description: [
        'Developed Java-based APIs to enhance work efficiency and integrated MongoDB for data storage. Additionally, created a custom application to facilitate these tasks.',
        'Collaborated with a team to build an application that scrapes essential data from e-commerce websites in the backend, enhancing data collection and analysis capabilities.',
        'Utilized jQuery to extract data from web sources to support the functionality of the Karma tool, contributing to data retrieval and analysis.',
      ],
    },
  ]
  constructor() {}
  ngOnInit(): void { }

}
