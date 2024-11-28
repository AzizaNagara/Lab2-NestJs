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
async create(createCvDto: CreateCvDto) {
  // Use the Cv repository to create a new CV
  const newCv = this.cvRepository.create(createCvDto); // Map DTO to entity
  return await this.cvRepository.save(newCv); // Save the entity in the database
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
    async update(id: number, updateCvDto: UpdateCvDto): Promise<Cv> {
      // Step 1: Find the CV by ID
      const cv = await this.cvRepository.findOne({ where: { id } });
  
      if (!cv) {
        throw new Error('CV not found'); // Handle case when CV is not found
      }
  
      // Step 2: Merge the update data with the found CV
      Object.assign(cv, updateCvDto); // This merges the fields from updateCvDto into the cv entity
  
      // Step 3: Save and return the updated CV
      return await this.cvRepository.save(cv); // This saves the updated entity back to the database
    }
  

  // Remove a CV
  async remove(id: number) {
    const cv = await this.cvRepository.findOne({ where: { id } });
    if (!cv) {
      throw new Error('CV not found');
    }
    return this.cvRepository.remove(cv); // Remove the CV from the database
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
