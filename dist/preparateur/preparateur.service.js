"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreparateurService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const preparateur_entity_1 = require("./preparateur.entity");
const bcrypt = __importStar(require("bcrypt"));
let PreparateurService = class PreparateurService {
    preparateurRepository;
    constructor(preparateurRepository) {
        this.preparateurRepository = preparateurRepository;
    }
    async create(dto) {
        const existing = await this.preparateurRepository.findOne({ where: { email: dto.email } });
        if (existing)
            throw new Error('Email déjà utilisé');
        const hash = await bcrypt.hash(dto.password, 10);
        const preparateur = this.preparateurRepository.create({ ...dto, password: hash });
        return this.preparateurRepository.save(preparateur);
    }
    findAll() {
        return this.preparateurRepository.find();
    }
    async findOne(id) {
        const user = await this.preparateurRepository.findOne({ where: { id } });
        if (!user)
            throw new Error('Préparateur introuvable');
        return user;
    }
    async update(id, dto) {
        const user = await this.findOne(id);
        if (dto.password) {
            dto.password = await bcrypt.hash(dto.password, 10);
        }
        const updated = this.preparateurRepository.merge(user, dto);
        return this.preparateurRepository.save(updated);
    }
    async remove(id) {
        const user = await this.findOne(id);
        await this.preparateurRepository.remove(user);
    }
};
exports.PreparateurService = PreparateurService;
exports.PreparateurService = PreparateurService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(preparateur_entity_1.Preparateur)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PreparateurService);
//# sourceMappingURL=preparateur.service.js.map