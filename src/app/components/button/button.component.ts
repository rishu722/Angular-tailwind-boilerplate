import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  baseClasses = 'px-4 py-2 font-semibold text-white rounded-lg text-sm';
  variantClasses = {
    primary: 'bg-btnPrimary hover:bg-blue-700',
    secondary: 'bg-gray-500 hover:bg-gray-700',
  };
  sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-lg',
  };

  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() children: string | number = '';
  @Input() label: string = 'Button';

  constructor() {}
}
export default ButtonComponent;
