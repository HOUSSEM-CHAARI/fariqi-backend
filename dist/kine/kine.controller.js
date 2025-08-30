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
exports.KineController = void 0;
const common_1 = require("@nestjs/common");
const kine_service_1 = require("./kine.service");
const create_kine_dto_1 = require("./dto/create-kine.dto");
const update_kine_dto_1 = require("./dto/update-kine.dto");
const passport_1 = require("@nestjs/passport");
const auth_kine_service_1 = require("../auth-kine/auth-kine.service");
let KineController = class KineController {
    kineService;
    authKineService;
    constructor(kineService, authKineService) {
        this.kineService = kineService;
        this.authKineService = authKineService;
    }
    async create(createKineDto) {
        return this.kineService.create(createKineDto);
    }
    async findAll() {
        return this.kineService.findAll();
    }
    async update(id, updateKineDto) {
        return this.kineService.update(+id, updateKineDto);
    }
    async findOne(id) {
        return this.kineService.findOne(+id);
    }
    async remove(id) {
        await this.kineService.remove(+id);
        return { message: `kine avec l'id ${id} supprimé.` };
    }
    async login(body) {
        return this.authKineService.validateKine(body.email, body.password);
    }
    getProfile(req) {
        return req.user;
    }
};
exports.KineController = KineController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_kine_dto_1.CreateKineDto]),
    __metadata("design:returntype", Promise)
], KineController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], KineController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_kine_dto_1.UpdateKineDto]),
    __metadata("design:returntype", Promise)
], KineController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KineController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], KineController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], KineController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('kine-jwt')),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KineController.prototype, "getProfile", null);
exports.KineController = KineController = __decorate([
    (0, common_1.Controller)('kine'),
    __metadata("design:paramtypes", [kine_service_1.KineService,
        auth_kine_service_1.AuthKineService])
], KineController);
//# sourceMappingURL=kine.controller.js.map