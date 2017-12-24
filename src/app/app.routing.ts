import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { UserComponent }  from './user.component';

const appRouts: Routes=[
   
     {
        path:'login',
        component: UserComponent
    }

 
]

export const routing: ModuleWithProviders= RouterModule.forRoot(appRouts);


