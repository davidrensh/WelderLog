"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var _1 = require('./app/');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var angularfire2_1 = require('angularfire2');
var role_service_1 = require('./app/role.service');
if (_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.bootstrap(_1.WelderlogAppComponent, [
    role_service_1.RoleService,
    angularfire2_1.FIREBASE_PROVIDERS,
    angularfire2_1.defaultFirebase('https://welderlog.firebaseio.com'), angularfire2_1.firebaseAuthConfig({
        method: angularfire2_1.AuthMethods.Password,
        provider: angularfire2_1.AuthProviders.Password,
        remember: 'default',
        scope: ['email']
    }),
    router_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]);
//# sourceMappingURL=main.js.map