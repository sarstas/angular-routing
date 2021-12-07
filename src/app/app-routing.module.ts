import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PostComponent} from './post/post.component';
import {PostsComponent} from './posts/posts.component';
import {AboutExtraComponent} from './about-extra/about-extra.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
            {path: 'extra', component: AboutExtraComponent}
        ]
    },
    {path: 'posts', component: PostsComponent, canActivate: [AuthGuard]},
    {
        path: 'posts/:id',
        component: PostComponent,

        },
    {path: 'error', component: ErrorPageComponent},
    {path: '**', component: ErrorPageComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}