import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/users';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() user: IUser;
}
