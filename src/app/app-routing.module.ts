import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductListComponent } from './component/product-list/product-list.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';

const appRoutes: Routes = [
    { path: 'home',     component:  HomeComponent },
    { path: 'product',  component:  ProductListComponent},
    { path: 'product/:id',  component:  ProductDetailComponent},
    { path: '**',   redirectTo: 'home'}
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
