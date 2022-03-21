import  { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'users/:id',
        component: UserComponent
    },
    {
        path: 'posts',
        component: PostListComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        FormsModule
    ],

    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }