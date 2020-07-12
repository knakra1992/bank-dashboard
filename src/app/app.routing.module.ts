import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
    { path: 'login', component: LoginFormComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
    { path: "**", redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
