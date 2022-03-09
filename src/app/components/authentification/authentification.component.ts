import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';
import { Admin } from '../../shared/model/admin';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
admin:Admin;
admins:Admin[];
b=false;
  constructor(private api:AdminService) { }

  ngOnInit(): void {
    this.admin=new Admin();

  }
  detectAdmin()
  {
    this.api.getAdmins().subscribe(
  
      {
        //user=>this.users=users = forwarding to front
        next: (data) => {
          this.admins = data;
          console.log(this.admins);
          for(let ad of this.admins) //parcourir la liste
          {
            if(ad.login==this.admin.login&& ad.mdp==this.admin.mdp)
            {
              this.b=true;
              /*localStorage.setItem("id",us.id);
              localStorage.setItem("grade",us.grade);
  */
              let current=JSON.stringify(ad); //converti json en string
              console.log("currentadmin",current);
              localStorage.setItem("cadmin",current);
              window.location.replace("rdv");
  
  
            }
  
          }
          if(!this.b) //if (b==false)
          alert("compte non reconnu!");
          this.admin=new Admin(); //
          // preserving data
        },
        error: (e) => console.error(e)
      }
    );
    console.log(this.admins);
  
  
  
  
  }
}
