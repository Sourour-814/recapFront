import { Component, OnInit } from '@angular/core';
import { Admin } from '../../shared/model/admin';
import { AdminService } from '../../shared/service/admin.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
admin:Admin;
admins:Admin[];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.admin=new Admin();
  }
  create() {
    this.adminService.createAdmin(this.admin as Admin).subscribe({
      next: (res) => {
        console.log(res);
        this.admins.push(res as Admin);
      },
    });
    alert('ajouté avec succés');
    //window.location.reload();
  }
}
