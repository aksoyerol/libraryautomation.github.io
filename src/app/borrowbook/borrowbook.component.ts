import { Component, OnInit } from '@angular/core';
import {
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BorrowbookService } from 'src/services/borrowbook.service';
import { BorrowBookModel } from 'src/Models/BorrowBookModel';
@Component({
  selector: 'app-borrowbook',
  templateUrl: './borrowbook.component.html',
  styleUrls: ['./borrowbook.component.css'],
})
export class BorrowbookComponent implements OnInit {
  addForm: FormGroup;
  borrowBooks: BorrowBookModel[] = [];
  editForm!: FormGroup;
  updateEntity!: BorrowBookModel;

  constructor(
    private service: BorrowbookService,
    private formBuilder: FormBuilder
  ) {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.addForm = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16)),
    });
  }

  log() {
    console.log(this.addForm.value.start);
  }

  ngOnInit(): void {}

  createForm() {
    this.addForm = this.formBuilder.group({
      deliveryDate: ['', Validators.required],
      receviedDate: ['', Validators.required],
      
      id: [],
    });
  }

  delete(id: Number) {
    this.service.deleteEntity(id).subscribe(() => {
      this.fetchData();
    });
  }

  edit(item: BorrowBookModel) {
    this.addForm.patchValue({
      receviedDate: item.receivedDate,
      deliveryDate: item.deliveryDate,
      id: item.id,
    });
    console.log('IDDD ' + this.addForm.value.id);
  }

  fetchData() {
    this.service.getAllEntity().subscribe((data: BorrowBookModel[]) => {
      this.borrowBooks = data;
      console.log(data);
    });
  }
  editEntity() {
    this.service.getEntity(this.addForm.value.id).subscribe((response) => {});
    this.service.updateEntity(this.addForm.value).subscribe((res) => {
      this.fetchData();
    });
    console.log(this.updateEntity);
  }

  addEntity() {
    let model = this.addForm.value as BorrowBookModel;
    this.service.addEntity(model).subscribe((response) => {
      console.log(response);
      this.fetchData();
    });
  }
}
