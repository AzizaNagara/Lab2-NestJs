"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const todo_controller_1 = require("./todo.controller");
const todo_service_1 = require("./todo.service");
describe('TodoController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [todo_controller_1.TodoController],
            providers: [todo_service_1.TodoService],
        }).compile();
        controller = module.get(todo_controller_1.TodoController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=todo.controller.spec.js.map