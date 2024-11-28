import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { SkillService } from './skill.service'; // SkillService
import { SkillController } from './skill.controller'; // SkillController
import { Skill } from './entities/skill.entity'; // Skill entity

@Module({
  imports: [
    TypeOrmModule.forFeature([Skill]), // Register the Skill entity
  ],
  controllers: [SkillController],
  providers: [SkillService],
  exports: [SkillService], // Export SkillService if needed by other modules
})
export class SkillModule {}
