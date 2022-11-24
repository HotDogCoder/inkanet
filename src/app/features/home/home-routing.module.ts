import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { DetailPageComponent } from './components/detail-page/detail-page.component';

const routes: Routes = [
  {
    path:'',
    component: WrapperComponent,
    children:[
      {
        path:'',
        component: LandingPageComponent,
      },
      {
        path:'/',
        component: LandingPageComponent,
      },
      {
        path:':section',
        component: LandingPageComponent
      },
      {
        path:':section/:service',
        component: DetailPageComponent
      }
    ]
  }
];

// const routes: Routes = [
//   {
//     path:'',
//     component: WrapperComponent,
//     children:[
//       {
//         path:'/',
//         component: WrapperComponent,
//       },
//       {
//         path:':section',
//         component: WrapperComponent,
//         children: [
//           {
//             path:':service',
//             component: ServiceDetailWrapperComponent,
//           }
//         ]
//       }
//     ],
//   },
//   {
//     path: 'servicios/:service',
//     component: ServiceDetailWrapperComponent,
//   }
// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
