import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Ivisiteurs } from '../interface/Visiteurs';
import { url_path } from 'src/app/constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {

  constructor(private httpService:ApiService) { }

  //Enregistrement des visiteurs

  addVisiteurs(visiteurs:Ivisiteurs){
    return this.httpService.post({endpoint:url_path.VISTEUR_SAVE,data: JSON.stringify(visiteurs)});

   }
}
