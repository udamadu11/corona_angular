import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-add-cases',
  templateUrl: './add-cases.component.html',
  styleUrls: ['./add-cases.component.css']
})
export class AddCasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
