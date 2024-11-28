import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeedController } from './seed.controller';


async function bootstrap() {
  // Create the application context
  const appContext = await NestFactory.createApplicationContext(AppModule);

  // Get the SeedController instance from the context
  const seedController = appContext.get(SeedController);

  // Call the seedDatabase method to perform the seeding
  await seedController.seedDatabase();

  console.log('Seed Completed Successfully!');
  
  // Close the application context
  await appContext.close();
}

bootstrap().catch((err) => {
  console.error('Error during database seeding:', err);
});
