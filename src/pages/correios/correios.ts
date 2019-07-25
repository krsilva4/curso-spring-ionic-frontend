import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CepDTO } from '../../models/cep.dto ';
import { CepService } from '../../services/domain/cep.service ';
import { FormGroup, FormBuilder } from '@angular/forms';

/**
 * Generated class for the CorreiosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-correios',
  templateUrl: 'correios.html',
})
export class CorreiosPage {

  cep: CepDTO;
  cepEntrada: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public cepService: CepService) {
  }

  buscarCep() {
    console.log(this.cepEntrada);
    this.cep = null;
    this.cepService.findAll(this.cepEntrada)
      .subscribe(response => {
        this.cepEntrada = "";
        this.cep = response;
        console.log(this.cep);

      },
        error => { });
  }
}


