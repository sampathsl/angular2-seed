import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';

@Component({
    selector : 'authors-html',
    template :  `
                <h1>~ Authors ~</h1>
                {{title}}
                <ul>
                    <li *ngFor="#author of authors">{{author}}</li>
                </ul>
                `,
    providers : [AuthorsService] //provide the dependencies
})

export class AuthorComponent{

    title : string = "This is Author title!";
    authors;
    constructor(authorsService : AuthorsService){
        this.authors = authorsService.getAuthors();
    }

}
