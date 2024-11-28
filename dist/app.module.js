"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const common_module_module_1 = require("./common-module/common-module.module");
const todo_module_1 = require("./todo/todo.module");
const typeorm_1 = require("@nestjs/typeorm");
const todo_entity_1 = require("./todo/entities/todo.entity");
const user_entity_1 = require("./user/entities/user.entity");
const cv_module_1 = require("./cv/cv.module");
const skill_module_1 = require("./skill/skill.module");
const user_module_1 = require("./user/user.module");
const cv_entity_1 = require("./cv/entities/cv.entity");
const skill_entity_1 = require("./skill/entities/skill.entity");
const seed_controller_1 = require("./seed.controller");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'aziza',
                database: 'todos',
                entities: [todo_entity_1.TodoEntity, user_entity_1.User, skill_entity_1.Skill, cv_entity_1.Cv],
                synchronize: true,
                logging: true,
            }),
            common_module_module_1.CommonModuleModule,
            todo_module_1.TodoModule,
            cv_module_1.CvModule,
            skill_module_1.SkillModule,
            user_module_1.UserModule,
        ],
        controllers: [app_controller_1.AppController, seed_controller_1.SeedController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map