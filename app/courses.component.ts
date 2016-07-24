import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './autogrow.directive';

@Component({
    selector : 'courses-html',
    template :  `
                <h1>~ Courses ~</h1>
                {{title}}
                <input type="text" autoGrow/>
                <ul>
                    <li *ngFor="#course of courses">{{course}}</li>
                </ul>
                `,
    providers : [CourseService], //provide the dependencies
    directives : [AutoGrowDirective] //bind the custom directives
})

export class CourseComponent{

    title : string = "This is course title!";
    courses;
    constructor(courseService : CourseService){
        this.courses = courseService.getCourses();
    }

}
