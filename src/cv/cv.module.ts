import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { CvService } from './cv.service'; // CvService
import { CvController } from './cv.controller'; // CvController
import { Cv } from './entities/cv.entity'; // Cv Entity

@Module({
  imports: [
    TypeOrmModule.forFeature([Cv]), // Register Cv entity for repository injection
  ],
  controllers: [CvController],
  providers: [CvService],
  exports: [CvService], // Export CvService if needed by other modules
})
export class CvModule {}
