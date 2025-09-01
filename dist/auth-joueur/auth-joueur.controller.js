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
const auth_joueur_service_1 = require("../auth-joueur/auth-joueur.service");
let JoueurController = class JoueurController {
    authJoueurService;
    constructor(authJoueurService) {
        this.authJoueurService = authJoueurService;
    }
    async login(body) {
        return this.authJoueurService.validateJoueur(body.email, body.password);
    }
};
exports.JoueurController = JoueurController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JoueurController.prototype, "login", null);
exports.JoueurController = JoueurController = __decorate([
    (0, common_1.Controller)('joueur'),
    __metadata("design:paramtypes", [auth_joueur_service_1.AuthJoueurService])
], JoueurController);
//# sourceMappingURL=auth-joueur.controller.js.map