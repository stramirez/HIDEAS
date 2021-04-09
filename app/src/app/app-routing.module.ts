import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { CategoriaComponent } from "./pages/categoria/categoria.component";
import { EstadoComponent } from "./pages/estado/estado.component";
import { IdeaComponent } from "./pages/idea/idea.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'categoria',
    component: CategoriaComponent
  },
  {
    path: 'estado',
    component: EstadoComponent
  },
  {
    path: 'idea',
    component: IdeaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
