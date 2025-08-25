"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoachModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const coach_entity_1 = require("./coach.entity");
const coach_service_1 = require("./coach.service");
const coach_controller_1 = require("./coach.controller");
const jwt_1 = require("@nestjs/jwt");
const auth_coach_service_1 = require("../auth-coach/auth-coach.service");
const coach_jwt_strategy_1 = require("../auth-coach/coach-jwt.strategy");
let CoachModule = class CoachModule {
};
exports.CoachModule = CoachModule;
exports.CoachModule = CoachModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([coach_entity_1.Coach]),
            jwt_1.JwtModule.register({
                secret: 'coachSecretKey',
                signOptions: { expiresIn: '1d' },
            }),
        ],
        controllers: [coach_controller_1.CoachController],
        providers: [coach_service_1.CoachService, auth_coach_service_1.AuthCoachService, coach_jwt_strategy_1.CoachJwtStrategy],
        exports: [coach_service_1.CoachService],
    })
], CoachModule);
//# sourceMappingURL=coach.module.js.map