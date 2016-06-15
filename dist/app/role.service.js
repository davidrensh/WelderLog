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
var RoleService = (function () {
    function RoleService() {
        //0  not logged in
        //1. member
        //2. driver
        //3. employee
        //4. owner
        this._role = 0;
        this._dealerName = "";
        this._uid = "";
        this._ownerId = "";
        this._phone = '';
        this._fname = '';
        this._lname = '';
    }
    Object.defineProperty(RoleService.prototype, "fname", {
        get: function () {
            return this._fname;
        },
        set: function (n) {
            this._fname = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleService.prototype, "lname", {
        get: function () {
            return this._lname;
        },
        set: function (n) {
            this._lname = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleService.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (rolelevel) {
            this._phone = rolelevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleService.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (rolelevel) {
            this._role = rolelevel;
            if (rolelevel == 0) {
                this._dealerName = "";
                this._uid = "";
                this._ownerId = "";
                this._phone = "";
                this._fname = "";
                this._lname = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleService.prototype, "dealer", {
        get: function () {
            return this._dealerName;
        },
        set: function (dealername) {
            this._dealerName = dealername;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleService.prototype, "uid", {
        get: function () {
            return this._uid;
        },
        set: function (id) {
            this._uid = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RoleService.prototype, "ownerId", {
        get: function () {
            return this._ownerId;
        },
        set: function (id) {
            this._ownerId = id;
        },
        enumerable: true,
        configurable: true
    });
    RoleService.prototype.clearPhone = function (phone) {
        return phone.trim().replace('-', '').replace('_', '').replace('(', '').replace(')', '').replace(' ', '').replace('.', '').replace('+', '');
    };
    RoleService.prototype.genEmail = function (phone) {
        return this.clearPhone(phone) + '@3s.com';
    };
    RoleService.prototype.getTodayId = function () {
        return (new Date()).toISOString().substr(0, 10);
    };
    RoleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RoleService);
    return RoleService;
}());
exports.RoleService = RoleService;
//# sourceMappingURL=role.service.js.map