"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const todo_service_1 = require("./todo.service");
describe('TodoService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [todo_service_1.TodoService],
        }).compile();
        service = module.get(todo_service_1.TodoService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=todo.service.spec.js.map