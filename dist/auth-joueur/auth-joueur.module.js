"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthJoueurModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const joueur_entity_1 = require("../joueur/joueur.entity");
const auth_joueur_service_1 = require("./auth-joueur.service");
const jwt_1 = require("@nestjs/jwt");
const joueur_jwt_strategy_1 = require("./joueur-jwt.strategy");
let AuthJoueurModule = class AuthJoueurModule {
};
exports.AuthJoueurModule = AuthJoueurModule;
exports.AuthJoueurModule = AuthJoueurModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([joueur_entity_1.Joueur]),
            jwt_1.JwtModule.register({
                secret: 'joueurSecretKey',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        providers: [auth_joueur_service_1.AuthJoueurService, joueur_jwt_strategy_1.JoueurJwtStrategy],
        exports: [auth_joueur_service_1.AuthJoueurService],
    })
], AuthJoueurModule);
//# sourceMappingURL=auth-joueur.module.js.map