import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  forms: Array<any> = [];
  constructor() {}

  addMainForm(mainForm): void {
    this.forms.push(mainForm);
    console.log(this.forms);
  }
  deleteMainForm(index): void {
    this.forms.splice(index, 1);
  }
  getForm(): Array<Object> {
    return this.forms;
  }

  addSubForm(index, subForm) {
    this.forms[index][`subInput`].push(subForm);
    console.log(this.forms);
  }

  addSubFormByMultipleIndex(index) {
    console.log(index);
    let arrayOfIndexes = index.split('');
    const target = this.forms[arrayOfIndexes[0]].subInput;
    arrayOfIndexes.shift();
    if (arrayOfIndexes.length > 1) {
      arrayOfIndexes = arrayOfIndexes.join('');
    }
    this.addNestedSubForm(target, arrayOfIndexes);
  }

  addNestedSubForm(target, indexes) {
    let currentTarget;
    if (indexes.length > 1) {
      indexes = indexes.split('');
      currentTarget = target[indexes[0]].subInput;
      indexes.shift();
      indexes = indexes.join('');
    } else {
      currentTarget = target[indexes].subInput;
      indexes = [];
    }
    if (indexes.length !== 0) {
      this.addNestedSubForm(currentTarget, indexes);
    } else {
      currentTarget.push({
        type: '',
        question: '',
        condition: '',
        answer: '',
        subInput: []
      });
      console.log(this.forms);
    }
  }

  deleteSubForm(indexes) {
    let arrayOfIndexes = indexes.split('');
    const indexToRemove = arrayOfIndexes[arrayOfIndexes.length - 1];
    arrayOfIndexes.pop();
    const target = this.forms[arrayOfIndexes[0]].subInput;
    arrayOfIndexes.shift();
    if (arrayOfIndexes.length === 0) {
      target.splice(indexToRemove, 1);
    }
    if (arrayOfIndexes.length > 1) {
      arrayOfIndexes = arrayOfIndexes.join('');
    }
    if (arrayOfIndexes.length >= 1) {
      this.removeSubFormFromArray(target, arrayOfIndexes, indexToRemove);
    }
  }

  removeSubFormFromArray(target, indexes, indexToRemove) {
    let currentTarget;
    if (indexes.length > 1) {
      indexes = indexes.split('');
      currentTarget = target[indexes[0]].subInput;
      indexes.shift();
      indexes = indexes.join('');
    } else {
      currentTarget = target[indexes].subInput;
      indexes = [];
    }
    if (indexes.length !== 0) {
      this.removeSubFormFromArray(currentTarget, indexes, indexToRemove);
    } else {
      currentTarget.splice(indexToRemove, 1);
      console.log(this.forms);
    }
  }

  updateMainForm(target, index, value) {
    if (target === 'question') {
      this.forms[index].question = value;
    }
    if (target === 'type') {
      this.forms[index].type = value;
    }
    console.log(this.forms);
  }

  updateSubForm(target, index, value) {
    const indexes = index.split('');
    let currentTarget = this.forms[indexes[0]].subInput;
    indexes.shift();
    if (indexes.length === 1) {
      currentTarget = currentTarget[indexes[0]];
    } else {
      currentTarget = this.findSubForm(indexes, currentTarget, target, value);
    }
  }

  findSubForm(indexes, target, key, value) {
    const currentTarget = target[indexes[0]];
    indexes.shift();
    if (indexes.length === 0) {
      currentTarget[key] = value;
      console.log(this.forms);
    } else {
      this.findSubForm(indexes, currentTarget.subInput, key, value);
    }
  }
}
