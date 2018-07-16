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
    this.formService.addMainForm({
      type: '',
      question: '',
      userAnswer: '',
      subInput: []
    });
  }

  addSubform(index: number): void {
    this.formService.addSubForm(index, {
      type: '',
      question: '',
      condition: '',
      answer: '',
      userAnswer: '',
      subInput: []
    });
  }

  deleteMainForm(index: number): void {
    this.formService.deleteMainForm(index);
  }

  // Update main forms
  onModelChange(event: string, target: string): void {
    if (target.includes('question')) {
      const index = target.substr(8);
      this.formService.updateMainForm('question', index, event);
    }
    if (target.includes('type')) {
      const index = target.substr(4);
      this.formService.updateMainForm('type', index, event);
    }
  }

  deleteAll(): void {
    this.formService.deleteAll();
  }
}
