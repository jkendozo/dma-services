import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-do-section',
  templateUrl: './what-we-do-section.component.html',
  styleUrls: ['./what-we-do-section.component.scss']
})
export class WhatWeDoSectionComponent implements OnInit {

  @Input() title?: string;

  task = [
    {
      taskType: 'Web Management',
      url: 'assets/web.png'
    },
    {
      taskType: 'Pay Per Click',
      url: 'assets/ppc.png'
    },
    {
      taskType: 'Landing Page Building',
      url: 'assets/landing-page.png'
    },
    {
      taskType: 'Ad Traffic',
      url: 'assets/ad-traffic.png'
    },
    {
      taskType: 'Search Engine Optimization',
      url: 'assets/seo.png'
    }
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
