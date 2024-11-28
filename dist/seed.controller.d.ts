import { UserService } from './user/user.service';
import { SkillService } from './skill/skill.service';
import { CvService } from './cv/cv.service';
export declare class SeedController {
    private readonly userService;
    private readonly skillService;
    private readonly cvService;
    constructor(userService: UserService, skillService: SkillService, cvService: CvService);
    seedDatabase(): Promise<{
        message: string;
    }>;
}
