import { Component } from '@angular/core';
import { DepartmentEntity } from '../department/department.component';
import { EmployeesDataService } from '../../data/employees-data-service';
import { ActivatedRoute } from '@angular/router';
import {
  EmployeesNavItem,
  EmployeesNavigator,
} from '../../navigation/employees-navigator';

@Component({
  selector: 'department-info',
  templateUrl: './department-info.component.html',
})
export class DepartmentInfoComponent {
  public countOfEmployees: number = 0;
  public department!: DepartmentEntity;

  constructor(
    private dataService: EmployeesDataService,
    private route: ActivatedRoute,
    private navigator: EmployeesNavigator
  ) {
    let findDepartment = dataService.departments.find((element) => {
      element.id.toString() == this.route.snapshot.paramMap.get('id');
    });
  }

  editDepartment() {
    this.navigator.showContent({
      navItem: EmployeesNavItem.EDIT_DEPARTMENT,
      params: '',
    });
  }

  getCountEmployees(department: DepartmentEntity): void {
    this.countOfEmployees += department.employees.length;
    department.departments.forEach((element) => {
      this.getCountEmployees(element);
    });
  }

  strings = {
    change: 'Изменить',
    supervisor: 'Руководитель',
    participants: 'Участники',
    emptyText: 'В отделе нет подразделений и сотрудников',
    add: 'Добавить',
  };

  isEmptyDepartment(): boolean {
    return (
      this.department.employees.length == 0 &&
      this.department.departments.length == 0
    );
  }

  onChangeClicked(): void {}

  onAddClicked(): void {}
}
