import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export-form',
  templateUrl: './export-form.component.html',
  styleUrls: ['./export-form.component.scss']
})
export class ExportFormComponent implements OnInit {
  form: string;

  ngOnInit(): void {
    this.form = localStorage.getItem('form');
  }
}
