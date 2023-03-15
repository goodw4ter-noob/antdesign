import { Component, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NzButtonType } from 'ng-zorro-antd/button';
import { NzIconService } from 'ng-zorro-antd/icon';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { searchLiteral } from './items';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  // [nzMultiple]="true"
  isVisible = false;
  isOkLoading = false;

  public form!: FormGroup;
  public nzType: NzButtonType = null;

  public item = {
    name: 'Не найдено',
    iconType: 'ng-zorro:notfound',
  }

  constructor(
    private readonly iconService: NzIconService,
    private msg: NzMessageService,
  ) {
    this.iconService.addIconLiteral('ng-zorro:notfound', searchLiteral);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  public filesToBeUploaded!: NzUploadFile[] | null;

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    if (this.filesToBeUploaded) return;

    const status = file.status;
    if (status !== 'uploading') {
    }
    if (status === 'done') {
      fileList.forEach(file => {
        this.msg.success(`"${file.name}" готов к импорту!`);
      })
      this.filesToBeUploaded = fileList;
    } else if (status === 'error') {
      this.msg.error(`При импорте "${file.name}" произошла ошибка!`);
    }
  }

  submitData() {
    console.log(this.filesToBeUploaded);
    this.isVisible = false;
    this.filesToBeUploaded = null;
  }

}
