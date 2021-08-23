import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
   title: string = 'tast-tracker';

  constructor() { }

  ngOnInit(): void {
  }

}
