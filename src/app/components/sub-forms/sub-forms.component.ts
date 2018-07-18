import { Component, OnInit, Input } from '@angular/core';
import { FormsService } from '../../services/forms.service';
import { FormModel } from '../../models/form.model';

@Component({
  selector: 'app-sub-forms',
  templateUrl: './sub-forms.component.html',
  styleUrls: ['./sub-forms.component.scss']
})
export class SubFormsComponent {
  @Input() items: Array<FormModel>;
  @Input() parentFormType: string;

  constructor(private formService: FormsService) {}

  addSubInput(target: FormModel): void {
    this.formService.addSubInput(target);
  }

  deleteSubInput(target: FormModel): void {
    this.formService.deleteSubInput(target);
  }
  onModelChanges(value: string, key: string, target: FormModel): void {
    this.formService.saveInputValue(target, key, value);
  }
}
