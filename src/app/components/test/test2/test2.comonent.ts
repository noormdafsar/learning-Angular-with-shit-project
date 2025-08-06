import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-test2',
    standalone: true,
    imports: [],
    templateUrl: './test2.component.html',
    styleUrl: './test2.component.css'
})
export default class Test2Component implements OnInit {
    @Input() searchTerm: string = '';

    ngOnInit(): void { }
}
