import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Blog Application',
      technologies: 'Spring Boot, Angular, Angular Material, SQL',
      description: [
        'Developed a feature-rich blog application designed to empower users to publish, manage, and share their content effortlessly. This platform simplifies the blogging experience with a user-friendly interface and a wide range of functionalities.',
        'Built the application with the features like User Authentication, Content Creation, Categories, Comments and Interactivity, Admin Panel, Responsive Design',
        'I was the lead developer and responsible for the full stack development of the blog application.',
      ],
    },
    {
      title: 'Financial Management System',
      technologies: 'Spring Boot, Angular, Angular Material, SQL',
      description: [
        'Developed a robust Financial Management System designed to empower businesses and individuals in managing their financial assets, transactions, and budgets. This system streamlines financial operations, offering comprehensive financial insights and tools to make informed decisions.',
        'Built the application with the features like User Authentication, Account Management, Expense Tracking, Reports and Analytics, Admin Panel, Reciept Generation',
        'Throughout the project, I gained proficiency in springboot, enhancing my skills in data-driven application development.',
      ],
    },
    {
      title: 'Online E-Commerce Application',
      technologies: 'Spring Boot, Angular, Angular Material, SQL',
      description: [
        'Developed a feature-rich e-commerce platform designed to provide a seamless online shopping experience for users. This project simplifies the process of buying and selling products online, with an intuitive user interface and a wide range of functionalities.',
        'Built the application with the features like Product Catalog, User Authentication, Shopping Cart, Order Tracking, Admin Panel, Responsive Design',
        'I was the lead developer and responsible for the full stack development of the blog application.',
      ],
    },
  ];
  constructor() {}
  ngOnInit(): void { }

}
