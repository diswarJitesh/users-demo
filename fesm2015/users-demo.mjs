import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/router';
import { RouterModule } from '@angular/router';

class UsersDemoService {
    constructor() { }
}
UsersDemoService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
UsersDemoService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class UsersDemoComponent {
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

const routes = [
    {
        path: '',
        component: UsersDemoComponent
    }
];
class UsersDemoRoutingModule {
}
UsersDemoRoutingModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoRoutingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UsersDemoRoutingModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoRoutingModule, imports: [i1.RouterModule], exports: [RouterModule] });
UsersDemoRoutingModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoRoutingModule, imports: [[RouterModule.forChild(routes)], RouterModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoRoutingModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [RouterModule.forChild(routes)],
                    exports: [RouterModule]
                }]
        }] });

class UsersDemoModule {
    constructor() {
        console.log("loaded");
    }
}
UsersDemoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
UsersDemoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoModule, declarations: [UsersDemoComponent], imports: [UsersDemoRoutingModule], exports: [UsersDemoComponent] });
UsersDemoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoModule, imports: [[
            UsersDemoRoutingModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: UsersDemoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        UsersDemoComponent
                    ],
                    imports: [
                        UsersDemoRoutingModule
                    ],
                    exports: [
                        UsersDemoComponent
                    ]
                }]
        }], ctorParameters: function () { return []; } });

/*
 * Public API Surface of users-demo
 */

/**
 * Generated bundle index. Do not edit.
 */

export { UsersDemoComponent, UsersDemoModule, UsersDemoService };
//# sourceMappingURL=users-demo.mjs.map
