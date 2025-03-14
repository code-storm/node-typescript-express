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
exports.UserController = void 0;
const userService_1 = require("../services/userService");
const userService = new userService_1.UserService();
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userService.createUser(req.body);
                res.status(201).json(user);
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userService.getUser(req.params.id);
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).json({ message: 'User not found' });
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userService.updateUser(req.params.id, req.body);
                if (user) {
                    res.status(200).json(user);
                }
                else {
                    res.status(404).json({ message: 'User not found' });
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield userService.deleteUser(req.params.id);
                if (user) {
                    res.status(200).json({ message: 'User deleted successfully' });
                }
                else {
                    res.status(404).json({ message: 'User not found' });
                }
            }
            catch (error) {
                res.status(400).json({ error: error.message });
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map