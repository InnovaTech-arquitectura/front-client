import { Component, OnInit } from '@angular/core';
import { RolesAuthService } from 'src/app/service/roles-auth.service';
import { functionality } from 'src/app/model/functionality';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private rolesAuthService: RolesAuthService
  ) { }

  func: functionality[] = [];

  ngOnInit(): void {
    this.rolesAuthService.findAll().subscribe(
      (response) => {
        for (let i = 0; i < response.length; i++) {
          this.func.push(response[i]);
        }
      }
    );
  }

  checkFunctionality(name: string): boolean {
    if (name === 'dashboard') {
      return this.func.some((func: { functionalityId: number }) => func.functionalityId === 1);
    }
    else if (name === 'bazares') {
      return this.func.some((func: { functionalityId: number }) => func.functionalityId === 2);
    }
    else if (name === 'capacitaciones') {
      return this.func.some((func: { functionalityId: number }) => func.functionalityId === 3);
    }
    else 
      return false;
  }

}
