import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleComponent} from './article/article.component';
import {LikeComponent} from './like/like.component';
import {FormsModule} from "@angular/forms";
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import { Routes, RouterModule } from '@angular/router';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    LikeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ]
})
const routes: Routes = [
  { path: '', component: AppComponent },
  { path: '/', component: AppComponent },
  { path: 'show', component: ArticleComponent }
];
export class AppModule {
}
