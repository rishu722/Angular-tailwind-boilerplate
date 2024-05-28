import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  @Input() text: string = '';
  @Input() type: 'success' | 'error' | 'warning' | 'info' = 'info';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() className: string | null = null;

  get badgeClasses(): string {
    let baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium';

    let typeClasses = '';
    switch (this.type) {
      case 'success':
        typeClasses = 'bg-green-100 text-green-800';
        break;
      case 'error':
        typeClasses = 'bg-red-100 text-red-800';
        break;
      case 'warning':
        typeClasses = 'bg-yellow-100 text-yellow-800';
        break;
      case 'info':
        typeClasses = 'bg-blue-100 text-blue-800';
        break;
      default:
        typeClasses = '';
    }

    let sizeClasses = '';
    switch (this.size) {
      case 'small':
        sizeClasses = 'text-xs';
        break;
      case 'large':
        sizeClasses = 'text-lg';
        break;
      default:
        sizeClasses = 'text-sm'; 
    }

    return `${baseClasses} ${this.className || ''} ${typeClasses} ${sizeClasses}`;
  }
}
