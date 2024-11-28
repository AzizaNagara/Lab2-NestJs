import { Controller, Get } from '@nestjs/common';
import { UserService } from './user/user.service';
import { SkillService } from './skill/skill.service';
import { CvService } from './cv/cv.service';

@Controller('seed')
export class SeedController {
  constructor(
    private readonly userService: UserService,
    private readonly skillService: SkillService,
    private readonly cvService: CvService,
  ) {}

  @Get()
  async seedDatabase() {
    console.log('Seeding users...');
    await this.userService.seedUsers(10);

    console.log('Seeding skills...');
    await this.skillService.seedSkills(10);

    console.log('Seeding CVs...');
    const users = await this.userService.findAll();
    for (const user of users) {
        await this.cvService.seedCvs(5); // Generates and saves 5 fake CVs
    }

    return { message: 'Database seeded successfully!' };
  }
}
