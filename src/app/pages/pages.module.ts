import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { SharedModule } from '../share/share.module';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { ChichitoComponent } from './chichito/chichito.component';

@NgModule({

    declarations:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,
        ChichitoComponent
    ],
    exports:[
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule{}

