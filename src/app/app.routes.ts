import { Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

export const routes: Routes = [
    {
        path: 'register',
        title: 'Personnel Disaster Recovery | Register Page',
        component: RegisterComponent
    },
    {
        path: 'login',
        title: 'Personnel Disaster Recovery | Login Page',
        component: LoginComponent
    },
    {
        path: 'forgot-password',
        title: 'Personnel Disaster Recovery | Forgot Password Page',
        component: ForgotPasswordComponent
    },
    {
        path: 'reset-password',
        title: 'Personnel Disaster Recovery | Reset Password Page',
        component: ResetPasswordComponent
    },
    {
        path: 'verify-email',
        title: 'Personnel Disaster Recovery | Verify Email Page',
        component: VerifyEmailComponent
    }
]