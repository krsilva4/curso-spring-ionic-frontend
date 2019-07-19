import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/credencias.dto';
import { AuthService } from '../../services/auth.service';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // inicializando variaveis
  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController,
    public menu: MenuController,
    public auth: AuthService) {

  }

  //Metodo responsavel, pegar dados da tela e em seguinda realizar validacao
  login() {
    this.auth.authenticate(this.creds)
      .subscribe(Response => {
        this.auth.successfulLogin(Response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
        error => { });

  }
  ionViewWillEnter() {
    //desabilitar menu
    this.menu.swipeEnable(false);
  }
  ionViewDidLeave() {
    //habilitar menu
    this.menu.swipeEnable(true);
  }
  ionViewDidEnter() {
    this.auth.refreshToken()
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriasPage');
      },
      error => {});  
  }
  signup() {
    this.navCtrl.push('SignupPage');
  }
}
