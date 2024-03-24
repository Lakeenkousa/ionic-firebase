import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LoginGuard} from '../login/login.guard';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path:'Homepage',
        children:[
          {
            path: '',
            loadChildren: () => import('../home/home.module').then( m => m.HomePageModule),
          }
        ]
      },
      {
        path:'Page1',
        children:[
          {
            path:'',
            loadChildren: () => import('../page1/page1.module').then( m => m.Page1PageModule),canLoad: [LoginGuard],
          }
        ]
      },
      {
        path:'Page2',
        children:[
          {
            path:'',
            loadChildren: () => import('../page2/page2.module').then(m => m.Page2PageModule),
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule),
          }
        ]
      },
     ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
