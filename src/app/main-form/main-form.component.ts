import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { NzSwitchComponent } from 'ng-zorro-antd/switch';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  validateForm!: UntypedFormGroup;
  controlArray: Array<{ index: number; show: boolean }> = [];
  isCollapse = true;

  multipleValue = ['a10', 'c12'];
  listOfOption: Array<{ label: string; value: string }> = [];
  size: NzSelectSizeType = 'default';

  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
    this.controlArray.forEach((c, index) => {
      c.show = this.isCollapse ? index < 6 : true;
    });
  }

  resetForm(): void {
    this.validateForm.reset();
  }

  constructor(private fb: UntypedFormBuilder) { }

  switchValue = false;

  ngOnInit(): void {
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: i.toString(36) + i });
    }
    this.listOfOption = children;
  }

}
