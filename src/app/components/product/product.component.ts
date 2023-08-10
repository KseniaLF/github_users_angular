import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/users';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() user: IUser;
}
