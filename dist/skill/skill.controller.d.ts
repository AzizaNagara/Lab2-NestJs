import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
export declare class SkillController {
    private readonly skillService;
    constructor(skillService: SkillService);
    create(createSkillDto: CreateSkillDto): Promise<import("./entities/skill.entity").Skill>;
    findAll(): Promise<import("./entities/skill.entity").Skill[]>;
    findOne(id: string): Promise<import("./entities/skill.entity").Skill>;
    update(id: string, updateSkillDto: UpdateSkillDto): Promise<import("./entities/skill.entity").Skill>;
    remove(id: string): Promise<string>;
}
