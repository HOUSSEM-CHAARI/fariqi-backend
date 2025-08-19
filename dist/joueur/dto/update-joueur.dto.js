"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJoueurDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_joueur_dto_1 = require("./create-joueur.dto");
class UpdateJoueurDto extends (0, mapped_types_1.PartialType)(create_joueur_dto_1.CreateJoueurDto) {
}
exports.UpdateJoueurDto = UpdateJoueurDto;
//# sourceMappingURL=update-joueur.dto.js.map