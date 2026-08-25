import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { SignIn } from './auth/sign-in/sign-in';

export const routes: Routes = [
    { path:"home", component: Home},
    { path: "products", component: Products},
    { path: "sign-in" , component: SignIn}
];
