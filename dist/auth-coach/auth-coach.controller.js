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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachController = void 0;
const common_1 = require("@nestjs/common");
const auth_coach_service_1 = require("../auth-coach/auth-coach.service");
let CoachController = class CoachController {
    authCoachService;
    constructor(authCoachService) {
        this.authCoachService = authCoachService;
    }
    async login(body) {
        return this.authCoachService.validateCoach(body.email, body.password);
    }
};
exports.CoachController = CoachController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CoachController.prototype, "login", null);
exports.CoachController = CoachController = __decorate([
    (0, common_1.Controller)('coach'),
    __metadata("design:paramtypes", [auth_coach_service_1.AuthCoachService])
], CoachController);
//# sourceMappingURL=auth-coach.controller.js.map