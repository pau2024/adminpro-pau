import { NgModule } from '@angular/core';

import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({

declarations: [
    BreadcrumbComponent,
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
],

exports: [
    BreadcrumbComponent,
    HeaderComponent,
    SidebarComponent,
    NopagefoundComponent
]

})
export class SharedModule { }

