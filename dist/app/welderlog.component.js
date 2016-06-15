"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var _weldentry_1 = require('./+weldentry');
var _ndebatch_1 = require('./+ndebatch');
var _ab83batch_1 = require('./+ab83batch');
var _import_1 = require('./+import');
var _export_1 = require('./+export');
var _transferwelddata_1 = require('./+transferwelddata');
var _project_1 = require('./+project');
var _childweldtype_1 = require('./+childweldtype');
var _interchangeableprocess_1 = require('./+interchangeableprocess');
var _pipeheat_1 = require('./+pipeheat');
var _schedule_1 = require('./+schedule');
var _schedulewallthickness_1 = require('./+schedulewallthickness');
var _lineclass_1 = require('./+lineclass');
var _weldersymbol_1 = require('./+weldersymbol');
var _welderentry_1 = require('./+welderentry');
var _welderqualification_1 = require('./+welderqualification');
var _weldprocedure_1 = require('./+weldprocedure');
var _usersetup_1 = require('./+usersetup');
var _myprofile_1 = require('./+myprofile');
var _about_1 = require('./+about');
var _home_1 = require('./+home');
var _signup_1 = require('./+signup');
var _servicetype_1 = require('./+servicetype');
var _parameter_1 = require('./+parameter');
var _parametertype_1 = require('./+parametertype');
var router_1 = require('@angular/router');
var role_service_1 = require('./role.service');
var http_1 = require('@angular/http');
//import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs/tabs';
var icon_1 = require('@angular2-material/icon/icon');
var button_1 = require('@angular2-material/button/button');
var sidenav_1 = require('@angular2-material/sidenav/sidenav');
var input_1 = require('@angular2-material/input/input');
var card_1 = require('@angular2-material/card/card');
var checkbox_1 = require('@angular2-material/checkbox/checkbox');
var angularfire2_1 = require('angularfire2');
var max = 5;
var WelderlogAppComponent = (function () {
    function WelderlogAppComponent(router, rs, auth0, af) {
        this.router = router;
        this.rs = rs;
        this.auth0 = auth0;
        this.af = af;
        this.isHome = false;
        this.isReports = false;
        this.isTools = false;
        this.isSettings = false;
        this.isMore = false;
        this.isLogin = false;
        this.currentBar = "";
        this.selectedMenu = "";
        //console.log("main:" + location.pathname);
        // if (location.pathname === "/admin")
        //     this.router.navigateByUrl('/admin/AdminLogin');
        // else if (location.pathname === "/home") this.router.navigateByUrl('/home/Login');
        // this.router.navigateByUrl('/home/Login');
        this.menuMain = this.af.list("/menu");
        //console.log("this.menuMain" + this.menuMain);
    }
    WelderlogAppComponent.prototype.ngOnInit = function () {
    };
    WelderlogAppComponent.prototype.setSub = function (s) {
        if (this.currentBar !== s) {
            this.currentBar = s;
            this.menuSub = null;
            //   console.log("this.getSub" + m);
            //console.log("this.getSublist" + JSON.stringify(this.af.list("/menu/" + m)));
            this.menuSub = this.af.list("/menu/" + this.currentBar);
        }
        else {
            this.currentBar = "";
            this.menuSub = null;
        }
    };
    WelderlogAppComponent.prototype.getLink = function (s) {
        return s.replace(" ", "");
    };
    WelderlogAppComponent = __decorate([
        core_1.Component({
            selector: 'welderlog-app',
            templateUrl: 'app/welderlog.component.html',
            styleUrls: ['app/welderlog.component.css'],
            directives: [card_1.MdCard, checkbox_1.MdCheckbox, router_1.ROUTER_DIRECTIVES, sidenav_1.MD_SIDENAV_DIRECTIVES, button_1.MdButton, button_1.MdAnchor, icon_1.MdIcon, input_1.MD_INPUT_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, icon_1.MdIconRegistry, http_1.HTTP_PROVIDERS],
            encapsulation: core_1.ViewEncapsulation.None,
        }),
        router_1.Routes([
            { path: '/weldentry', component: _weldentry_1.WeldentryComponent },
            { path: '/ndebatch', component: _ndebatch_1.NdebatchComponent },
            { path: '/ab83batch', component: _ab83batch_1.Ab83batchComponent },
            { path: '/import', component: _import_1.ImportComponent },
            { path: '/export', component: _export_1.ExportComponent },
            { path: '/transferwelddata', component: _transferwelddata_1.TransferwelddataComponent },
            { path: '/project', component: _project_1.ProjectComponent },
            { path: '/childweldtype', component: _childweldtype_1.ChildweldtypeComponent },
            { path: '/interchangeableprocess', component: _interchangeableprocess_1.InterchangeableprocessComponent },
            { path: '/pipeheat', component: _pipeheat_1.PipeheatComponent },
            { path: '/schedule', component: _schedule_1.ScheduleComponent },
            { path: '/schedulewallthickness', component: _schedulewallthickness_1.SchedulewallthicknessComponent },
            { path: '/lineclass', component: _lineclass_1.LineclassComponent },
            { path: '/weldersymbol', component: _weldersymbol_1.WeldersymbolComponent },
            { path: '/welderentry', component: _welderentry_1.WelderentryComponent },
            { path: '/welderqualification', component: _welderqualification_1.WelderqualificationComponent },
            { path: '/weldprocedure', component: _weldprocedure_1.WeldprocedureComponent },
            { path: '/usersetup', component: _usersetup_1.UsersetupComponent },
            { path: '/myprofile', component: _myprofile_1.MyprofileComponent },
            { path: '/about', component: _about_1.AboutComponent },
            { path: '/home', component: _home_1.HomeComponent },
            { path: '/signup', component: _signup_1.SignupComponent },
            { path: '', component: _home_1.HomeComponent },
            { path: '/', component: _home_1.HomeComponent },
            { path: '/servicetype', component: _servicetype_1.ServicetypeComponent },
            { path: '/parameter', component: _parameter_1.ParameterComponent },
            { path: '/parametertype', component: _parametertype_1.ParametertypeComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, role_service_1.RoleService, angularfire2_1.FirebaseAuth, angularfire2_1.AngularFire])
    ], WelderlogAppComponent);
    return WelderlogAppComponent;
}());
exports.WelderlogAppComponent = WelderlogAppComponent;
//# sourceMappingURL=welderlog.component.js.map