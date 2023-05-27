import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ivisiteurs } from '../interface/Visiteurs';
import { FunctionService } from '../services/function.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private SaveVisiteurs:FunctionService, private route:Router){}

  visiteurs:Ivisiteurs = {
    id: 0,
    nomprenoms: "",
    telephone: "",
    message: "",
    email: "",
    lieuhabitation: ""
  }

  VisiteurSave(){
    console.log(this.visiteurs);
    this.SaveVisiteurs.addVisiteurs(this.visiteurs).subscribe({

      next:data=>{
       this.route.navigate([""]);
       alert("Messge enregistre avec succes")

      },
      error:error=>{
        alert("une erreur s'est produite, merci de ressayer");
        console.log(error);
      }
    })
  }

}
