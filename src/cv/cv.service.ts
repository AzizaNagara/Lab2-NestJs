import { Injectable } from '@nestjs/common';
import { randFirstName, randLastName, randNumber, randJobTitle, randUrl } from '@ngneat/falso';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCvDto } from './dto/create-cv.dto';
import { UpdateCvDto } from './dto/update-cv.dto';
import { Repository } from 'typeorm';
import { Cv } from './entities/cv.entity'; // Adjust the path as necessary
import { User } from '../user/entities/user.entity'; // Adjust the path as necessary

@Injectable()
export class CvService {
  constructor(
    @InjectRepository(Cv)
    private cvRepository: Repository<Cv>,
  ) {}

  // Create a new CV
  create(createCvDto: CreateCvDto) {
    return 'This action adds a new CV';
  }

  // Find all CVs
  findAll() {
    return this.cvRepository.find(); // Return all CVs from the database
  }

  // Find a CV by ID
  findOne(id: number) {
    return this.cvRepository.findOne({ where: { id } });
  }

  // Update a CV
  update(id: number, updateCvDto: UpdateCvDto) {
    return `This action updates a #${id} CV`;
  }

  // Remove a CV
  remove(id: number) {
    return `This action removes a #${id} CV`;
  }

  // Generate a fake CV
  generateFakeCv(): Cv {
    const fakeCv = new Cv();
    fakeCv.name = randFirstName(); // Generate a random first name
    fakeCv.firstname = randLastName(); // Generate a random last name
    fakeCv.age = randNumber({ min: 18, max: 65 }); // Generate a random age
    fakeCv.cin = randNumber({ min: 10000000, max: 99999999 }).toString(); // Generate a random CIN
    fakeCv.job = randJobTitle(); // Generate a random job title
    fakeCv.path = randUrl(); // Generate a random URL

    return fakeCv;
  }

  // Seed the database with fake CVs
  async seedCvs(count: number): Promise<Cv[]> {
    const fakeCvs: Cv[] = [];

    for (let i = 0; i < count; i++) {
      const fakeCv = this.generateFakeCv();
      fakeCvs.push(fakeCv);
    }

    return await this.cvRepository.save(fakeCvs); // Save fake CVs to the database
  }
}
