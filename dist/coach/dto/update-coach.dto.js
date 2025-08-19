"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCoachDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_coach_dto_1 = require("./create-coach.dto");
class UpdateCoachDto extends (0, mapped_types_1.PartialType)(create_coach_dto_1.CreateCoachDto) {
}
exports.UpdateCoachDto = UpdateCoachDto;
//# sourceMappingURL=update-coach.dto.js.map