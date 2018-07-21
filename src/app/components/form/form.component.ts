import { FormModel } from './../../models/form.model';
import { FormsService } from './../../services/forms.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  forms: Array<FormModel>;
  target: FormModel;
  constructor(private formService: FormsService) {}

  ngOnInit(): void {
    this.formService.loadSavedForm();
    this.forms = this.formService.getForm();
  }

  addMainForm(): void {
    this.formService.addMainForm();
  }

  addSubform(target: FormModel): void {
    this.formService.addSubInput(target);
  }

  deleteMainForm(index: number): void {
    this.formService.deleteMainForm(index);
  }
  onModelChanges(value: string, key: string, target: FormModel): void {
    this.formService.saveInputValue(target, key, value);
  }
  deleteAll(): void {
    this.formService.deleteAll();
  }
}
