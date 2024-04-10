import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from '../models/article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  articles!: Observable<Article[]>;

  ngOnInit(): void {
    this.articles = of<Article[]>([
      {title: 'Title1', body: "body of title1", key: 'title-1'},
      {title: 'Title2', body: "body of title2", key: 'title-2'},
    ])
    debugger
  }
}
