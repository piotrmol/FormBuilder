import { Component, OnInit, Input } from '@angular/core';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'app-sub-forms',
  templateUrl: './sub-forms.component.html',
  styleUrls: ['./sub-forms.component.scss']
})
export class SubFormsComponent {
  @Input('data') items;
  @Input('index') parentIndex;

  constructor(private formService: FormsService) {}

  // addSubInput(parentIndex: any, currentIndex: number): void {
  //   const wholeIndex = `${parentIndex}${currentIndex}`;
  //   this.parentIndex = wholeIndex;
  //   this.formService.addSubFormByMultipleIndex(wholeIndex);
  // }

  // deleteSubIndex(parentIndex: any, currentIndex: number): void {
  //   const wholeIndex = `${parentIndex}${currentIndex}`;
  //   //this.parentIndex = wholeIndex;
  //   this.formService.deleteSubForm(wholeIndex);
  // }

  // //Updates forms values
  // onModelChange(event: string, target: string): void {
  //   if (target.includes('question')) {
  //     const index = target.substr(8);
  //     this.formService.updateSubForm('question', index, event);
  //   }
  //   if (target.includes('type')) {
  //     const index = target.substr(4);
  //     this.formService.updateSubForm('type', index, event);
  //   }
  //   if (target.includes('equality')) {
  //     const index = target.substr(8);
  //     this.formService.updateSubForm('equality', index, event);
  //   }
  //   if (target.includes('condition')) {
  //     const index = target.substr(9);
  //     this.formService.updateSubForm('condition', index, event);
  //   }
  // }

  addSubInput(target) {
    this.formService.addSubInput(target);
  }

  deleteSubInput(target) {
    this.formService.deleteSubInput(target);
  }
  onModelChanges(value, key, target) {
    this.formService.saveInputValue(target, key, value);
  }
}
