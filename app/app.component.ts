import {Component} from 'angular2/core';
import {CourseComponent} from './courses.component'
import {AuthorComponent} from './authors.component';

@Component({
    selector: 'my-app',
    template: '<h1>Hello Angular!</h1><courses-html></courses-html><authors-html></authors-html>',
    directives : [CourseComponent,AuthorComponent]
})
export class AppComponent { }