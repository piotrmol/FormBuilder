import { Component, Input } from '@angular/core';
import { FormModel } from '../../models/form.model';

@Component({
  selector: 'app-sub-input-preview',
  templateUrl: './sub-input-preview.component.html',
  styleUrls: ['./sub-input-preview.component.scss']
})
export class SubInputPreviewComponent {
  @Input() items: Array<FormModel>;
  @Input() parent: FormModel;

  onModelChange(value: string, key: string, target: FormModel) {
    target[key] = value;
  }

  // Method check if user gave correct answer and sub-input can be shown
  validate(parent: FormModel, currentForm: FormModel): boolean {
    let canShow = false;
    if (
      (parent.type === 'text' || parent.type === 'yes/no') &&
      parent.userAnswer === currentForm.expectedAnswer
    ) {
      canShow = true;
    } else if (parent.type === 'number') {
      if (
        currentForm.condition === 'equal' &&
        parent.userAnswer === currentForm.expectedAnswer
      ) {
        canShow = true;
      } else if (
        currentForm.condition === 'greater' &&
        parseInt(parent.userAnswer, 10) >
          parseInt(currentForm.expectedAnswer, 10)
      ) {
        canShow = true;
      } else if (
        currentForm.condition === 'less' &&
        parseInt(parent.userAnswer, 10) <
          parseInt(currentForm.expectedAnswer, 10)
      ) {
        canShow = true;
      }
    }
    return canShow;
  }
}
