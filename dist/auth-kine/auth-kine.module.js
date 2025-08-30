"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthKineModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const kine_entity_1 = require("../kine/kine.entity");
const auth_kine_service_1 = require("./auth-kine.service");
const kine_jwt_strategy_1 = require("./kine-jwt.strategy");
let AuthKineModule = class AuthKineModule {
};
exports.AuthKineModule = AuthKineModule;
exports.AuthKineModule = AuthKineModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([kine_entity_1.Kine]),
            jwt_1.JwtModule.register({
                secret: 'kineSecretKey',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        providers: [auth_kine_service_1.AuthKineService, kine_jwt_strategy_1.KineJwtStrategy],
        exports: [auth_kine_service_1.AuthKineService],
    })
], AuthKineModule);
//# sourceMappingURL=auth-kine.module.js.map