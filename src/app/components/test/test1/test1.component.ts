import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: 'app-test1',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './test1.component.html',
    styleUrl: './test1.component.css'
})
export default class Test1Component implements OnInit {
    @Input() searchTerm: string = ''; // This will receive data from the parent component
    @Output() searchTermChange = new EventEmitter<string>(); // This will emit data to the parent component

    ngOnInit(): void { }

    onInputChange(value: string) {
        this.searchTermChange.emit(value);
    }
}
