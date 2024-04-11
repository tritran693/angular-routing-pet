import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, filter, map, pluck, switchMap } from 'rxjs';
import { Article } from '../models/article';
import { ArticleService } from '../service/article.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent {

  article: Observable<Article | undefined> | undefined;

  constructor(private route: ActivatedRoute, private articleService: ArticleService){}

  ngOnInit(): void {
    this.article = this.route.params.pipe(
      map(item => item['key']),
      switchMap(key => this.articleService.getArticle(key)),
      filter(article => !!article)
    )
  }
}
