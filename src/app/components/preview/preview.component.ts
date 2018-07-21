import { FormModel } from './../../models/form.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  forms: Array<FormModel>;

  ngOnInit() {
    this.forms = JSON.parse(localStorage.getItem('form'));
  }

  onModelChange(value: string, key: string, target: FormModel) {
    target[key] = value;
  }
}
