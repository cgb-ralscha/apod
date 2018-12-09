import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {AppComponent} from './app.component';
import {HomePage} from './home/home.page';
import {CommonModule} from '@angular/common';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {DetailPage} from './detail/detail.page';
import {FullPage} from './full/full.page';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePage},
  {path: 'detail/:date', component: DetailPage},
  {path: 'full/:date', component: FullPage},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  declarations: [AppComponent, HomePage, DetailPage, FullPage],
  entryComponents: [],
  imports: [BrowserModule,
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes, {useHash: true}),
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
