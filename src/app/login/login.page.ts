import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm }from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { LoginService } from '../login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
isLoading = false;
isLogin = true;

  constructor(
    private LoginService: LoginService,
    private router: Router,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }

authenticate(email: string, password: string) {
  this.isLoading = true;
  this.LoginService.login();
  this.loadingCtrl
  .create({ keyboardClose: true, message:'You are being logged in...' })
  .then(loadingEl => {
    loadingEl.present();
    this.LoginService.signup(email, password).subscribe(
      resData => {
        console.log();
     this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/page1');
      }
    );
  });
}
onSubmit(form: NgForm) {
  if (!form.valid) {
    return;
  }
  const email = form.value.email;
  const password = form.value.password;
    
     this.authenticate(email, password);
}
}