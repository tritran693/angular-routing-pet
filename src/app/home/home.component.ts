import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article';
import { CommonModule, NgFor } from '@angular/common';
import { ArticleService } from '../service/article.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  articles!: Observable<Article[]>;

  constructor(private articleService: ArticleService, private router: Router){}

  ngOnInit(): void {
    this.articles = this.articleService.articles$;
  }

  handleNavigate(key: string) {
    this.router.navigate(['/detail', key]);
  }
}
