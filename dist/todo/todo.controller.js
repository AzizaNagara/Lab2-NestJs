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
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const todo_service_1 = require("./todo.service");
const create_todo_dto_1 = require("./dto/create-todo.dto");
const update_todo_dto_1 = require("./dto/update-todo.dto");
const status_enum_1 = require("./entities/status.enum");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async create(createTodoDto, req) {
        const userId = req.userId;
        return this.todoService.addTodo({ ...createTodoDto, userId });
    }
    async getTodoById(id) {
        try {
            return await this.todoService.findOneById(id);
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateTodoDto, req) {
        const todo = await this.todoService.findOneById(+id);
        if (todo.userId !== req.userId) {
            throw new common_1.UnauthorizedException('Vous n’avez pas la permission de modifier ce Todo.');
        }
        return this.todoService.update(+id, updateTodoDto);
    }
    async deleteTodo(id, req) {
        const todo = await this.todoService.findOneById(id);
        if (todo.userId !== req.userId) {
            throw new common_1.UnauthorizedException('Vous n’avez pas la permission de supprimer ce Todo.');
        }
        await this.todoService.softDelete(id);
        return {
            message: 'Todo deleted successfully',
        };
    }
    async restoreTodo(id) {
        await this.todoService.restoreTodo(id);
    }
    async getTodosCountByStatus() {
        const statusCount = await this.todoService.countTodosByStatus();
        return statusCount;
    }
    async getAllTodos() {
        return this.todoService.findAll();
    }
    async getTodos(name, description, status, page = 1, limit = 10) {
        return this.todoService.findAll_NDS(name, description, status, page, limit);
    }
};
exports.TodoController = TodoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todo_dto_1.CreateTodoDto, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodoById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_todo_dto_1.UpdateTodoDto, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deleteTodo", null);
__decorate([
    (0, common_1.Patch)(':id/restore'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "restoreTodo", null);
__decorate([
    (0, common_1.Get)('status/count'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodosCountByStatus", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getAllTodos", null);
__decorate([
    (0, common_1.Get)('NDS'),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Query)('description')),
    __param(2, (0, common_1.Query)('status')),
    __param(3, (0, common_1.Query)('page')),
    __param(4, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodos", null);
exports.TodoController = TodoController = __decorate([
    (0, common_1.Controller)('todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
//# sourceMappingURL=todo.controller.js.map