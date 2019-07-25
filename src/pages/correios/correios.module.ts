import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CorreiosPage } from './correios';
import { CepService } from '../../services/domain/cep.service ';

@NgModule({
  declarations: [
    CorreiosPage,
  ],
  imports: [
    IonicPageModule.forChild(CorreiosPage),
  ], providers: [
    CepService
  ]
})
export class CorreiosPageModule {}
