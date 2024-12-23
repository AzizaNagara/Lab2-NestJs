"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
let AuthMiddleware = class AuthMiddleware {
    use(req, res, next) {
        let token = req.headers['auth-user'];
        if (Array.isArray(token)) {
            token = token[0];
        }
        if (!token) {
            return res
                .status(common_1.HttpStatus.UNAUTHORIZED)
                .json({
                message: 'Cannot access the resource, no auth token provided.',
            });
        }
        try {
            const decoded = (0, jsonwebtoken_1.verify)(token, 'secretKey');
            if (typeof decoded === 'object' && 'userId' in decoded) {
                req['userId'] = decoded.userId;
                next();
            }
            else {
                return res
                    .status(common_1.HttpStatus.UNAUTHORIZED)
                    .json({
                    message: 'Cannot access the resource, no userId in the token.',
                });
            }
        }
        catch (err) {
            return res
                .status(common_1.HttpStatus.UNAUTHORIZED)
                .json({ message: 'Cannot access the resource, invalid token.' });
        }
    }
};
exports.AuthMiddleware = AuthMiddleware;
exports.AuthMiddleware = AuthMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthMiddleware);
//# sourceMappingURL=auth.middleware.js.map