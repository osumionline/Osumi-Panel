import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<router-outlet />`,
  imports: [RouterModule],
})
export class AppComponent implements OnInit {
  constructor(private as: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.as.checkPass().subscribe((result) => {
      if (result.status !== 'ok') {
        this.router.navigate(['/set-pass']);
      }
    });
  }
}
