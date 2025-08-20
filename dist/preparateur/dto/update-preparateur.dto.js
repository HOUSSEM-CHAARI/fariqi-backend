"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePreparateurDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_preparateur_dto_1 = require("./create-preparateur.dto");
class UpdatePreparateurDto extends (0, mapped_types_1.PartialType)(create_preparateur_dto_1.CreatePreparateurDto) {
}
exports.UpdatePreparateurDto = UpdatePreparateurDto;
//# sourceMappingURL=update-preparateur.dto.js.map