import { Component } from '@angular/core';
import { Store } from 'src/app/core/mvi/store';
import { EmployeeEditState } from './state/employee-edit-state';
import { EmployeeEditExecutor } from './state/employee-edit-executor';
import {
  EmployeeEditAction,
  EmployeeEditActionTypes,
} from './state/employee-edit-action';
import { EmployeeEditResultAction } from './state/employee-edit-result-action';
import { EmployeeEditReducer } from './state/employee-edit-reducer';

@Component({
  selector: 'employee-edit',
  templateUrl: './employee-edit.component.html',
})
export class EmployeeEditComponent extends Store<
  EmployeeEditState,
  EmployeeEditExecutor,
  EmployeeEditAction,
  EmployeeEditResultAction
> {
  constructor(
    state: EmployeeEditState,
    executor: EmployeeEditExecutor,
    reducer: EmployeeEditReducer,
  ) {
    super(state, executor, reducer);
  }

  protected readonly EmployeeEditActionTypes = EmployeeEditActionTypes;
}
