import { Component, Input } from '@angular/core';
import { Character } from '../character';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css'],
})

export class ChildComponent {
    @Input() get person() {
        return this._person;
    } set person(obj: Character) {    
        obj.name = obj.name.trim() || "There is no name present";
        if (obj.name === 'There is no name present') {
            this.setClass = false;
        } else {
            this.setClass = true;
        }
        this._person = obj;
        console.log(obj);        
    }
    private _person!: Character;

    setClass: boolean = true;

    multipleClassesOne = {setAlignment: true, changeColor: true};
    multipleClassesTwo = ['setAlignment', 'changeColor'];    
    multipleClassesThree = 'setAlignment changeColor';  

    constructor() { }

}