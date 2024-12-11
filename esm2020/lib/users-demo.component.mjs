import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class UsersDemoComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        console.log('Activated route data in Component:::', this.activatedRoute.data);
    }
}
UsersDemoComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoComponent, deps: [{ token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Component });
UsersDemoComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: UsersDemoComponent, selector: "lib-usersDemo", ngImport: i0, template: `
    <p>
      users-demo works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-usersDemo',
                    template: `
    <p>
      users-demo works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMtZGVtby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy91c2Vycy1kZW1vL3NyYy9saWIvdXNlcnMtZGVtby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBWWxELE1BQU0sT0FBTyxrQkFBa0I7SUFFN0IsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQUksQ0FBQztJQUV2RCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FDVCxzQ0FBc0MsRUFDdEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3pCLENBQUM7SUFDSixDQUFDOztnSEFUVSxrQkFBa0I7b0dBQWxCLGtCQUFrQixxREFSbkI7Ozs7R0FJVDs0RkFJVSxrQkFBa0I7a0JBVjlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRTs7OztHQUlUO29CQUNELE1BQU0sRUFBRSxFQUNQO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi11c2Vyc0RlbW8nLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgdXNlcnMtZGVtbyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJzRGVtb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgJ0FjdGl2YXRlZCByb3V0ZSBkYXRhIGluIENvbXBvbmVudDo6OicsXG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGFcbiAgICApO1xuICB9XG5cbn1cbiJdfQ==