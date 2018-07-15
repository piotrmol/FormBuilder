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
    this.forms = this.formService.getForm();
    //this.test = this.formService.getTest();
  }

  addMainForm() {
    this.formService.addMainForm({
      type: '',
      question: '',
      subInput: []
    });
  }

  addSubform(index) {
    this.formService.addSubForm(index, {
      type: '',
      question: '',
      condition: '',
      answer: '',
      subInput: []
    });
  }

  deleteMainForm(index) {
    this.formService.deleteMainForm(index);
  }

  onModelChange(event, target) {
    if (target.includes('question')) {
      const index = target.substr(8);
      this.formService.updateMainForm('question', index, event);
    }
    if (target.includes('type')) {
      const index = target.substr(4);
      this.formService.updateMainForm('type', index, event);
    }
  }

  // setTarget(event) {
  //   this.target = event.target;
  // }
}
