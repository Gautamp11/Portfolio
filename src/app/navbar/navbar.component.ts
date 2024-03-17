import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Select all elements with class 'nav-link'
    const links = document.querySelectorAll('.nav-link');

    // For each link, attach a click event listener
    links.forEach(link => {
      link.addEventListener('click', () => {
        // Remove 'active' class from all links
        links.forEach(l => l.classList.remove('active'));

        // Add 'active' class to the clicked link
        link.classList.add('active');
      });
    });
  }
}
