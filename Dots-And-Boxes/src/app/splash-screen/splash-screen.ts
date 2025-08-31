import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  imports: [],
  templateUrl: './splash-screen.html',
  styleUrl: './splash-screen.css'
})
export class SplashScreen implements OnInit {
  hideSplash = false;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {this.router.navigate(['/game']);}, 9000);
  }

}
