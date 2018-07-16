import { Component, OnInit, Input } from '@angular/core';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'app-sub-forms',
  templateUrl: './sub-forms.component.html',
  styleUrls: ['./sub-forms.component.scss']
})
export class SubFormsComponent {
  @Input('data') items;
  //@Input('index') parentIndex;

  constructor(private formService: FormsService) {}

  addSubInput(target: Object): void {
    this.formService.addSubInput(target);
  }

  deleteSubInput(target: Object): void {
    this.formService.deleteSubInput(target);
  }
  onModelChanges(value: string, key: string, target: Object): void {
    this.formService.saveInputValue(target, key, value);
  }
}
