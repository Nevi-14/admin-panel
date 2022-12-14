import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AlertasService } from '../services/alertas.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
  
    public router: Router,
    public alertasService:AlertasService
  ){

  }
  canLoad()
    {
     const isAuthenticated = null; // this.usuariosService.usuario
     const navigation = this.router.getCurrentNavigation();
      
     return true
     if(isAuthenticated){

   
      return true
     }else{
      if(navigation){
        let url = navigation.extractedUrl.toString();
        this.router.navigateByUrl('inicio-sesion');
        this.alertasService.message('ISLEÑA','Inicia Sesión para continuar ..')
      }

return false
     }
  }
}
