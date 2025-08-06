import { Component } from '@angular/core';
import Test1Component from './test1/test1.component';
import Test2Component from './test2/test2.comonent';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [Test1Component, Test2Component],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  searchTerm: string = '';

  // Ye function test1 se data receive karega
  onSearchTermChange(term: string) {
    this.searchTerm = term;
  }
}
