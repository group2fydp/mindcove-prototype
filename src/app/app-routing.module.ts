import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: 'src/app/pages/crisis-mode/tabs-page/tabs-page.module#TabsPageModule'
  },
  {
    path: 'home',
    loadChildren: 'src/app/pages/normal-mode/home/home.module#HomePageModule'
  },
  { 
    path: 'safety-plan-static', 
    loadChildren: 'src/app/pages/normal-mode/safety-plan-static/safety-plan-static.module#SafetyPlanStaticPageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
