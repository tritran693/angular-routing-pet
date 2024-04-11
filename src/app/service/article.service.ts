import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Observable, map, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  get articles$(){
    return of<Article[]>([
      {title: 'Title1', body: "body of title1", key: 'title1'},
      {title: 'Title2', body: "body of title2", key: 'title2'},
    ]).pipe(shareReplay(1));
  }

  getArticle(key: string): Observable<Article | undefined> {
    return this.articles$.pipe(map(articles => articles.find(ar => ar.key === key)));
  }
}
