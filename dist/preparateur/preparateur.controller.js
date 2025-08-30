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
exports.PreparateurController = void 0;
const common_1 = require("@nestjs/common");
const preparateur_service_1 = require("./preparateur.service");
const create_preparateur_dto_1 = require("./dto/create-preparateur.dto");
const update_preparateur_dto_1 = require("./dto/update-preparateur.dto");
const passport_1 = require("@nestjs/passport");
const auth_preparateur_service_1 = require("../auth-preparateur/auth-preparateur.service");
let PreparateurController = class PreparateurController {
    preparateurService;
    authPreparateurService;
    constructor(preparateurService, authPreparateurService) {
        this.preparateurService = preparateurService;
        this.authPreparateurService = authPreparateurService;
    }
    async create(createPreparateurDto) {
        return this.preparateurService.create(createPreparateurDto);
    }
    async findAll() {
        return this.preparateurService.findAll();
    }
    async update(id, updatePreparateurDto) {
        return this.preparateurService.update(id, updatePreparateurDto);
    }
    async findOne(id) {
        return this.preparateurService.findOne(+id);
    }
    async remove(id) {
        await this.preparateurService.remove(id);
        return { message: `Préparateur avec l'id ${id} supprimé.` };
    }
    async login(body) {
        return this.authPreparateurService.validatePreparateur(body.email, body.password);
    }
    getProfile(req) {
        return req.user;
    }
};
exports.PreparateurController = PreparateurController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_preparateur_dto_1.CreatePreparateurDto]),
    __metadata("design:returntype", Promise)
], PreparateurController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PreparateurController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_preparateur_dto_1.UpdatePreparateurDto]),
    __metadata("design:returntype", Promise)
], PreparateurController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PreparateurController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PreparateurController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PreparateurController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('preparateur-jwt')),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PreparateurController.prototype, "getProfile", null);
exports.PreparateurController = PreparateurController = __decorate([
    (0, common_1.Controller)('preparateur'),
    __metadata("design:paramtypes", [preparateur_service_1.PreparateurService,
        auth_preparateur_service_1.AuthPreparateurService])
], PreparateurController);
//# sourceMappingURL=preparateur.controller.js.map