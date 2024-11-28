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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user/user.service");
const skill_service_1 = require("./skill/skill.service");
const cv_service_1 = require("./cv/cv.service");
let SeedController = class SeedController {
    constructor(userService, skillService, cvService) {
        this.userService = userService;
        this.skillService = skillService;
        this.cvService = cvService;
    }
    async seedDatabase() {
        console.log('Seeding users...');
        await this.userService.seedUsers(10);
        console.log('Seeding skills...');
        await this.skillService.seedSkills(10);
        console.log('Seeding CVs...');
        const users = await this.userService.findAll();
        for (const user of users) {
            await this.cvService.seedCvs(5);
        }
        return { message: 'Database seeded successfully!' };
    }
};
exports.SeedController = SeedController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeedController.prototype, "seedDatabase", null);
exports.SeedController = SeedController = __decorate([
    (0, common_1.Controller)('seed'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        skill_service_1.SkillService,
        cv_service_1.CvService])
], SeedController);
//# sourceMappingURL=seed.controller.js.map