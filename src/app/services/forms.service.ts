import { FormModel } from './../models/form.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  forms: Array<FormModel> = [];

  addMainForm(): void {
    this.forms.push({
      type: '',
      question: '',
      userAnswer: '',
      id: this.getUniqueId(),
      subInput: []
    });
    this.saveForm();
  }

  deleteMainForm(index: number): void {
    this.forms.splice(index, 1);
    this.saveForm();
  }

  getForm(): Array<FormModel> {
    return this.forms;
  }

  deleteAll(): void {
    this.forms.splice(0);
  }

  saveForm(): void {
    const formToSave = JSON.stringify(this.forms);
    localStorage.setItem('form', formToSave);
  }

  loadSavedForm(): void {
    localStorage.getItem('form')
      ? (this.forms = JSON.parse(localStorage.getItem('form')))
      : (this.forms = []);
  }

  addSubInput(target: FormModel) {
    target.subInput.push({
      type: '',
      question: '',
      condition: '',
      answer: '',
      userAnswer: '',
      id: this.getUniqueId(),
      subInput: []
    });
    this.saveForm();
  }

  deleteSubInput(target: FormModel) {
    delete target.type;
    delete target.question;
    delete target.condition;
    delete target.answer;
    delete target.userAnswer;
    delete target.subInput;
    delete target.id;
    this.forms.forEach(el => this.findEmptyObj(el.subInput));
    this.saveForm();
  }

  findEmptyObj(array: Array<FormModel>) {
    array.forEach((el, index) => {
      if (Object.keys(el).length === 0) {
        array.splice(index, 1);
      } else {
        this.findEmptyObj(el.subInput);
      }
    });
  }

  saveInputValue(target: FormModel, key: string, value: string) {
    target[key] = value;
    this.saveForm();
  }

  getUniqueId() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    );
  }
}
