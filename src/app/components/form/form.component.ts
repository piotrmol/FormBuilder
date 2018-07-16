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
    console.log(this.forms);
  }

  addMainForm(): void {
    this.formService.addMainForm();
  }

  addSubform(target): void {
    this.formService.addSubInput(target);
  }

  deleteMainForm(index: number): void {
    this.formService.deleteMainForm(index);
  }
  onModelChanges(value, key, target) {
    this.formService.saveInputValue(target, key, value);
  }
  deleteAll(): void {
    this.formService.deleteAll();
  }

}
