import { Pipe, PipeTransform } from '@angular/core';
import {User} from "../Shared/Models/user";
@Pipe({
  name: 'fullName',
  standalone: true
})
export class FullNamePipe implements PipeTransform {
  transform(user: User): string {
    return `${user.firstName} ${user.lastName}`;
  }
}
