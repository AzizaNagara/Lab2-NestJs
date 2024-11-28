import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { UserService } from './user/user.service';
import { SkillService } from './skill/skill.service';
import { CvService } from './cv/cv.service';

@Injectable()
export class SeederService implements OnApplicationBootstrap {
  constructor(
    private readonly userService: UserService,
    private readonly skillService: SkillService,
    private readonly cvService: CvService,
  ) {}

  async seedDatabase(): Promise<void> {
    console.log('Seeding database with fake data...');

    // Seed Users
    const users = await this.userService.seedUsers(10); // Generate 10 fake users
    console.log(`${users.length} users seeded.`);

    // Seed Skills
    const skills = await this.skillService.seedSkills(10); // Generate 10 fake skills
    console.log(`${skills.length} skills seeded.`);

    // Seed CVs (linking them with users)
    for (const user of users) {
      const fakeCv = this.cvService.generateFakeCv(user); // Generate a CV for each user
      console.log(`Seeded CV for user ${user.username}:`, fakeCv);
    }
  }

  async onApplicationBootstrap() {
    await this.seedDatabase();
  }
}
