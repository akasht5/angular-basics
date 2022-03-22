import  { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component'

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
    },
    {
        path: 'users/add/:id',
        component: EditUserComponent
    },
    {
        path: 'users/edit/:id',
        component: EditUserComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }