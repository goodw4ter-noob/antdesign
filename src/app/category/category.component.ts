import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzIconService } from 'ng-zorro-antd/icon';
import { searchLiteral } from './items';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  public fileChanged = new EventEmitter<Blob>()
  isVisible = false;
  isOkLoading = false;

  public form!: FormGroup;
  public nzType: NzButtonType = null;
  public onUpload(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }
    console.log(input.files[0]);
    this.fileChanged.emit(input.files[0]);
  }

  public item = {
    name: 'Не найдено',
    iconType: 'ng-zorro:notfound',
  }

  constructor(
    private fb: FormBuilder,
    private readonly iconService: NzIconService,
  ) {
    this.form = this.formInit();
    this.iconService.addIconLiteral('ng-zorro:notfound', searchLiteral);
  }

  showModal(): void {
    this.isVisible = true;
  }

  public loadData(file: Blob): void {
    // this.store.dispatch(
    //   new LoadCSVData({
    //     id: this.proposalId,
    //     file,
    //   }),
    // );
    console.log(file);
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
