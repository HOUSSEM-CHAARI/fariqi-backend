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
exports.JoueurController = void 0;
const common_1 = require("@nestjs/common");
const joueur_service_1 = require("./joueur.service");
const create_joueur_dto_1 = require("./dto/create-joueur.dto");
const update_joueur_dto_1 = require("./dto/update-joueur.dto");
const passport_1 = require("@nestjs/passport");
const auth_joueur_service_1 = require("../auth-joueur/auth-joueur.service");
let JoueurController = class JoueurController {
    joueurService;
    authJoueurService;
    constructor(joueurService, authJoueurService) {
        this.joueurService = joueurService;
        this.authJoueurService = authJoueurService;
    }
    async create(createJoueurDto) {
        return this.joueurService.create(createJoueurDto);
    }
    async findAll() {
        return this.joueurService.findAll();
    }
    async update(id, updateJoueurDto) {
        return this.joueurService.update(id, updateJoueurDto);
    }
    async findOne(id) {
        return this.joueurService.findOne(+id);
    }
    async remove(id) {
        await this.joueurService.remove(id);
        return { message: `joueur avec l'id ${id} supprimé.` };
    }
    async login(body) {
        return this.authJoueurService.validateJoueur(body.email, body.password);
    }
    getProfile(req) {
        return req.user;
    }
};
exports.JoueurController = JoueurController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_joueur_dto_1.CreateJoueurDto]),
    __metadata("design:returntype", Promise)
], JoueurController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JoueurController.prototype, "findAll", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_joueur_dto_1.UpdateJoueurDto]),
    __metadata("design:returntype", Promise)
], JoueurController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JoueurController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JoueurController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JoueurController.prototype, "login", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('joueur-jwt')),
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], JoueurController.prototype, "getProfile", null);
exports.JoueurController = JoueurController = __decorate([
    (0, common_1.Controller)('joueur'),
    __metadata("design:paramtypes", [joueur_service_1.JoueurService,
        auth_joueur_service_1.AuthJoueurService])
], JoueurController);
//# sourceMappingURL=joueur.controller.js.map