import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Repository } from 'typeorm';
import { Skill } from './entities/skill.entity';
export declare class SkillService {
    private skillRepository;
    constructor(skillRepository: Repository<Skill>);
    create(createSkillDto: CreateSkillDto): Promise<Skill>;
    findAll(): Promise<Skill[]>;
    findOne(id: number): Promise<Skill>;
    update(id: number, updateSkillDto: UpdateSkillDto): Promise<Skill>;
    remove(id: number): Promise<string>;
    generateFakeSkill(): Skill;
    seedSkills(count: number): Promise<Skill[]>;
}
