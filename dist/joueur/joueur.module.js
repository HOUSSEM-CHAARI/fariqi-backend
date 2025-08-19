"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoueurModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const joueur_entity_1 = require("./joueur.entity");
const joueur_service_1 = require("./joueur.service");
const joueur_controller_1 = require("./joueur.controller");
let JoueurModule = class JoueurModule {
};
exports.JoueurModule = JoueurModule;
exports.JoueurModule = JoueurModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([joueur_entity_1.Joueur])],
        controllers: [joueur_controller_1.JoueurController],
        providers: [joueur_service_1.JoueurService],
        exports: [joueur_service_1.JoueurService],
    })
], JoueurModule);
//# sourceMappingURL=joueur.module.js.map