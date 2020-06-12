import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', redirectTo:'/category', pathMatch:'full'},
  {path: 'category', component: CategoryComponent, canActivate: [ AuthGuard ]},
  {path: 'catalogue/:idcatalogue', component: CatalogueComponent, canActivate: [ AuthGuard ]},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/category' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  CategoryComponent,
  CatalogueComponent,
  LoginComponent,
];