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
var angularfire2_1 = require('angularfire2');
var role_service_1 = require('../role.service');
var SignupComponent = (function () {
    function SignupComponent(auth0, af, rs) {
        this.auth0 = auth0;
        this.af = af;
        this.rs = rs;
        this.menuMain = {
            'Home': ['Weld Entry', 'Welder Entry', 'NDE Batch', 'AB83 Batch'],
            'Tools': ['Import', 'Export', 'Transfer Weld Data'],
            'Settings': ['Project', 'Child Weld Type', 'Interchangeable Process', 'Parameter', 'Parameter Type', 'Pipe Heat', 'Schedule', 'Schedule Wall Thickness', 'Line Class', 'Service Type', 'Welder Symbol', 'Welder Qualification', 'Weld Procedure'],
            'Reports': ['Report1'],
            'More': ['User Setup', 'My Profile', 'About', 'Signup']
        };
        this.errmsg = "";
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.errmsg = "";
    };
    SignupComponent.prototype.setup = function () {
        var i = 0;
        var j = 0;
        for (var key in this.menuMain) {
            i++;
            // skip loop if the property is from prototype
            if (!this.menuMain.hasOwnProperty(key))
                continue;
            // this.af.database.object("/menu/" + key).update({
            //   name: key
            // });
            var obj = this.menuMain[key];
            j = 0;
            //console.log("obj" + obj );
            for (var prop in obj) {
                j++;
                // skip loop if the property is from prototype
                if (!obj.hasOwnProperty(prop))
                    continue;
                this.af.database.object("/menu/" + i.toString() + key + "/" + j.toString() + obj[prop]).update({
                    name: obj[prop]
                });
            }
        }
    };
    SignupComponent.prototype.signup = function (fname, lname, email, password, phone, address) {
        var _this = this;
        if (!password || password === undefined)
            password = this.rs.clearPhone(phone);
        var loginemail = this.rs.genEmail(phone);
        this.af.auth.createUser({
            email: loginemail,
            password: password
        }).then(function (authdata) {
            SignupComponent.uu = authdata.uid;
            localStorage.setItem('uid', authdata.uid);
            console.log("this.uid:" + SignupComponent.uu);
        }).catch(function (error) {
            console.log("err:" + JSON.stringify(error));
            if (error !== null) {
                switch (error.code) {
                    case "INVALID_EMAIL":
                        console.log("The specified email is not a valid email.");
                        //this.errmsg = "The specified phone is invalid.";
                        break;
                    default:
                        // this.errmsg = "Error creating user:" + error;
                        console.log("Error creating user:", error);
                        break;
                    case "EMAIL_TAKEN":
                        // this.errmsg = "The new user account cannot be created because the phone is already in use. Use the credential to setup store.";
                        console.log("The new user account cannot be created because the phone is already in use. Use the credential to setup store.");
                        break;
                }
            }
            return;
        });
        setTimeout(function () {
            //console.log("this.uid:" + SignupComponent.uu + this.uid);
            if (SignupComponent.uu !== undefined) {
                _this.uid = SignupComponent.uu;
                //localStorage.setItem('uid', "");
                _this.af.auth.login({ email: loginemail, password: password }).then(function (authData) {
                    //this.uid = authData.uid;
                    if (_this.uid) {
                        //console.log("44" + this.uid);
                        _this.af.database.object("/users/" + _this.uid).update({
                            uid: _this.uid,
                            email: email,
                            fname: fname,
                            lname: lname,
                            phone: phone,
                            role: 4,
                            ownerid: _this.uid,
                            password: 'secret'
                        });
                    }
                });
            }
        }, 2000);
        setTimeout(function () {
            _this.errmsg = "";
        }, 5000);
    };
    SignupComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-signup',
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css']
        }), 
        __metadata('design:paramtypes', [angularfire2_1.FirebaseAuth, angularfire2_1.AngularFire, role_service_1.RoleService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map