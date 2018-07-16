import { FormsService } from './../../services/forms.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  forms: Array<Object>;
  target;
  constructor(private formService: FormsService) {}

  ngOnInit(): void {
    this.formService.LoadSavedForm();
    this.forms = this.formService.getForm();
  }

  addMainForm(): void {
    this.formService.addMainForm();
  }

  addSubform(target: Object): void {
    this.formService.addSubInput(target);
  }

  deleteMainForm(index: number): void {
    this.formService.deleteMainForm(index);
  }
  onModelChanges(value: string, key: string, target: Object): void {
    this.formService.saveInputValue(target, key, value);
  }
  deleteAll(): void {
    this.formService.deleteAll();
  }
}
