"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const coach_module_1 = require("./coach/coach.module");
const joueur_module_1 = require("./joueur/joueur.module");
const kine_module_1 = require("./kine/kine.module");
const preparateur_module_1 = require("./preparateur/preparateur.module");
const auth_coach_module_1 = require("./auth-coach/auth-coach.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'fariqi_db',
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
                synchronize: true,
            }),
            coach_module_1.CoachModule,
            joueur_module_1.JoueurModule,
            kine_module_1.KineModule,
            preparateur_module_1.PreparateurModule,
            auth_coach_module_1.AuthCoachModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map