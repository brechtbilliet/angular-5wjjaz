import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[loading]',
  standalone: true
})
export class LoadingDirective {
  @Input() loading = false;

  @HostBinding('class.loading') get loadingClass() :boolean {
    return this.loading;
  }
}