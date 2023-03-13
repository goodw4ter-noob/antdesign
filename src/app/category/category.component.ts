import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  isVisible = false;
  isOkLoading = false;

  public form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.formInit();
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(form: FormGroup): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);

    console.log(form.controls['title'].value);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  formInit() {
    return this.fb.group({
      parentCategoryCode: new FormControl(''),
      categoryCode: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      isAvailable: new FormControl(''),
      isClassificationAllowed: new FormControl(''),
    })
  }
}
