"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var user_login_service_1 = require("./user-login.service");
describe('UserLoginService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(user_login_service_1.UserLoginService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
