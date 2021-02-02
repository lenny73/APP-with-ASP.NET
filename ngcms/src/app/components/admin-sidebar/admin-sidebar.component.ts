import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SidebarService } from './../../services/sidebar.service';

declare var CKEDITOR: any;

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  content: string;
  id: string;
  successMsg: boolean = false;

  constructor(
    private router: Router,
    private sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("user") !== "\"admin\"") {
      this.router.navigateByUrl('');
  }

  this.sidebarService.getSidebar().subscribe(res => {
      this.content = res["content"];
      this.id = res["id"];
      CKEDITOR.replace('content');
  });
}

editSidebar({value}) {
  value.content = CKEDITOR.instances.content.getData();

  this.sidebarService.putSidebar(value).subscribe(res => {
      this.successMsg = true;
      setTimeout(function() {
          this.successMsg = false;
      }.bind(this), 2000);
  });
}

}
