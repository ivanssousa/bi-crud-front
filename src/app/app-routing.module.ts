import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { BiCriarComponent } from './bi-criar/bi-criar.component';
import { BiListarComponent } from './bi-listar/bi-listar.component';
import { BiEditarComponent } from './bi-editar/bi-editar.component';
import { BiMostrarComponent } from './bi-mostrar/bi-mostrar.component';


const routes: Routes = [
  {
    path: 'bi',
    children: [
      {
        path: '',
        component: BiListarComponent,
        data: { title: 'Lista de Bilhetes de Identidade' }
      },
      {
        path: 'criar',
        component: BiCriarComponent,
        data: { title: 'Novo Bilhete de Identidade' }
      },
      {
        path: 'editar/:id',
        component: BiEditarComponent,
        data: { title: 'Editar Bilhete de Identidade' }
      },
      {
        path: 'mostrar/:id',
        component: BiMostrarComponent,
        data: { title: 'Mostrar Bilhete de Identidade' }
      },
    ]
  },
  {
    path: '',
    redirectTo: '/bi',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
