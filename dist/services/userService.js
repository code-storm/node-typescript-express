"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const models_1 = require("../models");
class UserService {
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = new models_1.User(data);
            return yield user.save();
        });
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.User.findById(id).exec();
        });
    }
    updateUser(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.User.findByIdAndUpdate(id, data, { new: true }).exec();
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.User.findByIdAndDelete(id).exec();
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map