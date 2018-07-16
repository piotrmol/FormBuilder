import { Injectable } from '@angular/core';
import { stringify } from '../../../node_modules/@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  forms: Array<any> = [];
  constructor() {}

  addMainForm(): void {
    this.forms.push({
      type: '',
      question: '',
      userAnswer: '',
      subInput: []
    });
    this.saveForm();
  }
  deleteMainForm(index: any): void {
    this.forms.splice(index, 1);
    this.saveForm();
  }
  getForm(): Array<Object> {
    return this.forms;
  }

  deleteAll(): void {
    this.forms.splice(0);
  }

  saveForm(): void {
    let formToSave: any = this.forms;
    formToSave = JSON.stringify(this.forms);
    localStorage.setItem('form', formToSave);
  }

  LoadSavedForm(): void {
    localStorage.getItem('form')
      ? (this.forms = JSON.parse(localStorage.getItem('form')))
      : (this.forms = []);
  }

  addSubInput(target) {
    target.subInput.push({
      type: '',
      question: '',
      condition: '',
      answer: '',
      userAnswer: '',
      subInput: []
    });
    this.saveForm();
  }

  deleteSubInput(target) {
    delete target.type;
    delete target.question;
    delete target.condition;
    delete target.answer;
    delete target.userAnswer;
    delete target.subInput;
    //this.saveForm();
    this.forms.forEach(el => this.findEmptyObj(el.subInput));
    this.saveForm();
  }

  findEmptyObj(array) {
    array.forEach((el, index) => {
      if (Object.keys(el).length == 0) {
        array.splice(index, 1);
      } else {
        this.findEmptyObj(el.subInput);
      }
    });
  }

  saveInputValue(target, key, value) {
    target[key] = value;
    this.saveForm();
  }
}
