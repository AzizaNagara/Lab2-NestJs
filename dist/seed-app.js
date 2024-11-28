"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const seed_controller_1 = require("./seed.controller");
async function bootstrap() {
    const appContext = await core_1.NestFactory.createApplicationContext(app_module_1.AppModule);
    const seedController = appContext.get(seed_controller_1.SeedController);
    await seedController.seedDatabase();
    console.log('Seed Completed Successfully!');
    await appContext.close();
}
bootstrap().catch((err) => {
    console.error('Error during database seeding:', err);
});
//# sourceMappingURL=seed-app.js.map