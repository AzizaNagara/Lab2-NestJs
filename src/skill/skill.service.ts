import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { randSkill } from '@ngneat/falso';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Skill } from './entities/skill.entity'; // Adjust the path as necessary

@Injectable()
export class SkillService {
  constructor(
    @InjectRepository(Skill)
    private skillRepository: Repository<Skill>, // Inject the Skill repository
  ) {}

  // Create a new skill
  create(createSkillDto: CreateSkillDto) {
    const skill = this.skillRepository.create(createSkillDto);
    return this.skillRepository.save(skill);
  }

  // Find all skills
  findAll() {
    return this.skillRepository.find(); // Return all skills from the database
  }

  // Find a skill by ID
  findOne(id: number) {
    return this.skillRepository.findOne({ where: { id } });
  }

  // Update a skill
  async update(id: number, updateSkillDto: UpdateSkillDto) {
    await this.skillRepository.update(id, updateSkillDto);
    return this.skillRepository.findOne({ where: { id } });
  }

  // Remove a skill
  async remove(id: number) {
    const skill = await this.findOne(id);
    if (skill) {
      await this.skillRepository.delete(id);
      return `Skill with ID ${id} deleted successfully.`;
    }
    return `Skill with ID ${id} not found.`;
  }

  // Generate a fake skill using @ngneat/falso
  generateFakeSkill(): Skill {
    const fakeSkill = new Skill();
    fakeSkill.designation = randSkill(); // Generate a random designation

    return fakeSkill;
  }

  // Seed the database with fake skills
  async seedSkills(count: number): Promise<Skill[]> {
    const fakeSkills: Skill[] = [];
    for (let i = 0; i < count; i++) {
      const fakeSkill = this.generateFakeSkill();
      fakeSkills.push(fakeSkill);
    }
    return await this.skillRepository.save(fakeSkills); // Save fake skills to the database
  }
}
