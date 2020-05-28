import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormControl, FormGroup} from '@angular/forms'
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),

  });

  

  constructor(private router:Router, private auth: AuthService,private sign: SignupService) { }

  ngOnInit(): void {
  }

  signin(){
    console.log(this.authForm.value);
    this.auth.signIn(this.authForm.value).subscribe(
      data => {
        if(data.status == true){
          this.router.navigate(['/products']);
        }else{
          alert('Username or Password is incorrect!');
        }
      },
      err => {
        console.log(err);
        alert('Username or Password is incorrect!');
      });
  }
  signup(){
    console.log(this.authForm.value);
    this.sign.signUp(this.authForm.value).subscribe(
      data => {
        alert('Create your account successfully')
      }
    );
    
    }
}
