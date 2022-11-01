import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './site/home/home.component';
import { PdfsComponent } from './site/pdfs/pdfs.component';
import { PersonagensComponent } from './site/personagens/personagens.component';
import { LoginComponent } from './site/login/login.component';
import { CadastroComponent } from './site/cadastro/cadastro.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "PDFS",
    component: PdfsComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cadastro",
    component: CadastroComponent
  },
  {
    path: "New/personagem",
    component: PersonagensComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
