import { Routes } from '@angular/router';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { HomeComponent } from './UI/components/home/home.component';
import { ContactusComponent } from './UI/components/contactus/contactus.component';
import { FullscreenComponent } from './UI/layouts/fullscreen/fullscreen.component';
import { LoginComponent } from './UI/components/login/login.component';
import { RegistrationComponent } from './UI/components/registration/registration.component';
import { authGuarGuard } from './UI/shared/guards/auth-guar.guard';
import { EventDetailComponent } from './UI/components/event-detail/event-detail.component';

export const routes: Routes = [

  {
    path: '', redirectTo: '/fullscreen/login', pathMatch: 'full'},
    {
      path:'',
      component: DefaultComponent,
      canActivate: [authGuarGuard],
      children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: 'eventDetail/:eventId',
        component: EventDetailComponent
      },
      {
        path: "contact",
        component: ContactusComponent
      }
    ]
  },

  {
    path: "fullscreen",
    component: FullscreenComponent,
    children : [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "registration",
        component: RegistrationComponent
      }
    ]
  }

];
