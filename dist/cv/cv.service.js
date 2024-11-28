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
exports.CvService = void 0;
const common_1 = require("@nestjs/common");
const falso_1 = require("@ngneat/falso");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cv_entity_1 = require("./entities/cv.entity");
let CvService = class CvService {
    constructor(cvRepository) {
        this.cvRepository = cvRepository;
    }
    async create(createCvDto) {
        const newCv = this.cvRepository.create(createCvDto);
        return await this.cvRepository.save(newCv);
    }
    findAll() {
        return this.cvRepository.find();
    }
    findOne(id) {
        return this.cvRepository.findOne({ where: { id } });
    }
    async update(id, updateCvDto) {
        const cv = await this.cvRepository.findOne({ where: { id } });
        if (!cv) {
            throw new Error('CV not found');
        }
        Object.assign(cv, updateCvDto);
        return await this.cvRepository.save(cv);
    }
    async remove(id) {
        const cv = await this.cvRepository.findOne({ where: { id } });
        if (!cv) {
            throw new Error('CV not found');
        }
        return this.cvRepository.remove(cv);
    }
    generateFakeCv() {
        const fakeCv = new cv_entity_1.Cv();
        fakeCv.name = (0, falso_1.randFirstName)();
        fakeCv.firstname = (0, falso_1.randLastName)();
        fakeCv.age = (0, falso_1.randNumber)({ min: 18, max: 65 });
        fakeCv.cin = (0, falso_1.randNumber)({ min: 10000000, max: 99999999 }).toString();
        fakeCv.job = (0, falso_1.randJobTitle)();
        fakeCv.path = (0, falso_1.randUrl)();
        return fakeCv;
    }
    async seedCvs(count) {
        const fakeCvs = [];
        for (let i = 0; i < count; i++) {
            const fakeCv = this.generateFakeCv();
            fakeCvs.push(fakeCv);
        }
        return await this.cvRepository.save(fakeCvs);
    }
};
exports.CvService = CvService;
exports.CvService = CvService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cv_entity_1.Cv)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CvService);
//# sourceMappingURL=cv.service.js.map