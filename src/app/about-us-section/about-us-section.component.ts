import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss']
})
export class AboutUsSectionComponent implements OnInit {

  @Input() title?: string;
  @Input() description?: string;
  @Input() aboutImage?:string;

  constructor() { }

  ngOnInit(): void {
  }

}
