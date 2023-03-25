import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  
})
export class SidebarComponent implements OnInit {
  isOpen = false;

  ngOnInit() {
    const storedValue = localStorage.getItem('isOpen');
    if (storedValue !== null) {
      this.isOpen = storedValue === 'true';
    }
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    localStorage.setItem('isOpen', String(this.isOpen));
    console.log(this.isOpen);
  }

  menuItems = MENU_ITEMS;

}

const MENU_ITEMS = [
  { icon:'home',name: 'Home', link: '/login' },
  { icon:'chart-area',name: 'Dashboard', link: '/login' },
  { icon:'tools',name: 'Settings', link: '/login' },
];

