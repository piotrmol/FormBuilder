import { Component, OnInit, Input } from '@angular/core';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'app-sub-forms',
  templateUrl: './sub-forms.component.html',
  styleUrls: ['./sub-forms.component.scss']
})
export class SubFormsComponent implements OnInit {
  @Input('data') items;
  @Input('index') parentIndex;
  lastIndex = null;
  // @Input() currentIndex;
  // wholeIndex: string;
  // @Input('key') key;
  constructor(private formService: FormsService) {}

  ngOnInit() {
    // this.wholeIndex = `${this.parentIndex}${this.currentIndex}`;
    // console.log(this.wholeIndex);
    console.log(this.parentIndex);
  }

  addSubInput(parentIndex, currentIndex) {
    const wholeIndex = `${parentIndex}${currentIndex}`;
    this.parentIndex = wholeIndex;
    this.formService.addSubFormByMultipleIndex(wholeIndex);
  }

  deleteSubIndex(parentIndex, currentIndex) {
    const wholeIndex = `${parentIndex}${currentIndex}`;
    this.parentIndex = wholeIndex;
    this.formService.deleteSubForm(wholeIndex);
  }

  onModelChange(event, target) {
    if (target.includes('question')) {
      const index = target.substr(8);
      this.formService.updateSubForm('question', index, event);
    }
    if (target.includes('type')) {
      const index = target.substr(4);
      this.formService.updateSubForm('type', index, event);
    }
    if (target.includes('equality')) {
      const index = target.substr(8);
      this.formService.updateSubForm('equality', index, event);
    }
    if (target.includes('condition')) {
      const index = target.substr(9);
      this.formService.updateSubForm('condition', index, event);
    }
  }
}
