"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateKineDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_kine_dto_1 = require("./create-kine.dto");
class UpdateKineDto extends (0, mapped_types_1.PartialType)(create_kine_dto_1.CreateKineDto) {
}
exports.UpdateKineDto = UpdateKineDto;
//# sourceMappingURL=update-kine.dto.js.map