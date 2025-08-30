"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthPreparateurModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const preparateur_entity_1 = require("../preparateur/preparateur.entity");
const auth_preparateur_service_1 = require("./auth-preparateur.service");
const jwt_1 = require("@nestjs/jwt");
const preparateur_jwt_strategy_1 = require("./preparateur-jwt.strategy");
let AuthPreparateurModule = class AuthPreparateurModule {
};
exports.AuthPreparateurModule = AuthPreparateurModule;
exports.AuthPreparateurModule = AuthPreparateurModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([preparateur_entity_1.Preparateur]),
            jwt_1.JwtModule.register({
                secret: 'preparateurSecretKey',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        providers: [auth_preparateur_service_1.AuthPreparateurService, preparateur_jwt_strategy_1.PreparateurJwtStrategy],
        exports: [auth_preparateur_service_1.AuthPreparateurService],
    })
], AuthPreparateurModule);
//# sourceMappingURL=auth-preparateur.module.js.map