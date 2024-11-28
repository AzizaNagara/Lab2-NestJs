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
exports.SkillService = void 0;
const common_1 = require("@nestjs/common");
const falso_1 = require("@ngneat/falso");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const skill_entity_1 = require("./entities/skill.entity");
let SkillService = class SkillService {
    constructor(skillRepository) {
        this.skillRepository = skillRepository;
    }
    create(createSkillDto) {
        const skill = this.skillRepository.create(createSkillDto);
        return this.skillRepository.save(skill);
    }
    findAll() {
        return this.skillRepository.find();
    }
    findOne(id) {
        return this.skillRepository.findOne({ where: { id } });
    }
    async update(id, updateSkillDto) {
        await this.skillRepository.update(id, updateSkillDto);
        return this.skillRepository.findOne({ where: { id } });
    }
    async remove(id) {
        const skill = await this.findOne(id);
        if (skill) {
            await this.skillRepository.delete(id);
            return `Skill with ID ${id} deleted successfully.`;
        }
        return `Skill with ID ${id} not found.`;
    }
    generateFakeSkill() {
        const fakeSkill = new skill_entity_1.Skill();
        fakeSkill.designation = (0, falso_1.randSkill)();
        return fakeSkill;
    }
    async seedSkills(count) {
        const fakeSkills = [];
        for (let i = 0; i < count; i++) {
            const fakeSkill = this.generateFakeSkill();
            fakeSkills.push(fakeSkill);
        }
        return await this.skillRepository.save(fakeSkills);
    }
};
exports.SkillService = SkillService;
exports.SkillService = SkillService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(skill_entity_1.Skill)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SkillService);
//# sourceMappingURL=skill.service.js.map