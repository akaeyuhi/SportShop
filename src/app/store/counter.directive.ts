import {
  Directive, ViewContainerRef, TemplateRef, Input, SimpleChanges
} from '@angular/core';

class CounterDirectiveContext {
  constructor(public $implicit: any) { }
}

@Directive({
  selector: '[appCounterOf]'
})

export class CounterDirective {
  constructor(private container: ViewContainerRef,
              private template: TemplateRef<object>) {
  }
  @Input('appCounterOf')
  counter = 0;
  ngOnChanges(changes: SimpleChanges) {
    this.container.clear();
    for (let i = 0; i < this.counter; i++) {
      this.container.createEmbeddedView(this.template,
        new CounterDirectiveContext(i + 1));
    }
  }
}

