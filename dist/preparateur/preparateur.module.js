"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreparateurModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const preparateur_entity_1 = require("./preparateur.entity");
const preparateur_service_1 = require("./preparateur.service");
const preparateur_controller_1 = require("./preparateur.controller");
let PreparateurModule = class PreparateurModule {
};
exports.PreparateurModule = PreparateurModule;
exports.PreparateurModule = PreparateurModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([preparateur_entity_1.Preparateur])],
        controllers: [preparateur_controller_1.PreparateurController],
        providers: [preparateur_service_1.PreparateurService],
        exports: [preparateur_service_1.PreparateurService],
    })
], PreparateurModule);
//# sourceMappingURL=preparateur.module.js.map