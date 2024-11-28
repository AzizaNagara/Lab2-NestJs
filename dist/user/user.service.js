"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const falso_1 = require("@ngneat/falso");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    create(createUserDto) {
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
    }
    findAll() {
        return this.userRepository.find();
    }
    findOne(id) {
        return this.userRepository.findOne({ where: { id } });
    }
    async update(id, updateUserDto) {
        await this.userRepository.update(id, updateUserDto);
        return this.userRepository.findOne({ where: { id } });
    }
    async remove(id) {
        const user = await this.findOne(id);
        if (user) {
            await this.userRepository.delete(id);
            return `User with ID ${id} deleted successfully.`;
        }
        return `User with ID ${id} not found.`;
    }
    generateFakeUser() {
        const fakeUser = new user_entity_1.User();
        fakeUser.username = (0, falso_1.randUserName)();
        fakeUser.email = (0, falso_1.randEmail)();
        fakeUser.password = (0, falso_1.randPassword)();
        return fakeUser;
    }
    async seedUsers(count) {
        const fakeUsers = [];
        for (let i = 0; i < count; i++) {
            const fakeUser = this.generateFakeUser();
            fakeUsers.push(fakeUser);
        }
        return await this.userRepository.save(fakeUsers);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map