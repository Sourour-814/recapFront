import { Component, OnInit } from '@angular/core';
import { Rdv } from '../shared/model/rdv';
import { RdvService } from '../shared/service/rdv.service';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrls: ['./rdv.component.css']
})
export class RdvComponent implements OnInit {
  rdv:Rdv;
  rdvs:Rdv[];


  constructor(private rdvService:RdvService) { }

  ngOnInit(): void {
    this.rdv=new Rdv();
    this.readRdvs();
    //this.rdv=JSON.parse(localStorage.getItem("crdv"));
  }

  readRdvs(): void {
    this.rdvService.getRdvs().subscribe({
      next: (data) => {
        this.rdvs = data;
        console.log(this.rdvs);
      /*  for(let rdv of this.rdvs) 
        {
          
            
            /*localStorage.setItem("id",us.id);
            localStorage.setItem("grade",us.grade);

            let current=JSON.stringify(rdv); //converti json en string
            console.log("currentrdv",current);
            localStorage.setItem("crdv",current);
            //window.location.replace("rdv");


          

        }*/
      },
      error: (e) => console.error(e),
    });
  }

  create()
  {
    this.rdvService.createRdv(this.rdv as Rdv).subscribe({
      next: (res) => {
        console.log(res);
        this.rdvs.push(res as Rdv);
      },
    });

    alert('ajouté avec succés');
    window.location.reload();
  }

  /*delete(rdv: Rdv)
   {
    if(confirm("vous voulez supprimer votre profile"))
    this.rdvService.deleteRdv(this.rdv.id).subscribe(
      ()=> {
        localStorage.clear();
        window.location.reload();
        
      }
    );
    
  }*/
  delete(rdv: Rdv): void {
    this.rdvs = this.rdvs.filter(h => h !== rdv);
    this.rdvService.deleteRdv(rdv.id).subscribe();
  }

}