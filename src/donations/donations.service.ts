import { CreateDonationInput } from './dto/create-donation.input';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateDonationInput } from './dto/update-donation.input';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}
  create(createDonationInput: CreateDonationInput) {
    return 'This action adds a new donation';
  }

  findAll() {
    return this.prisma.donation.findMany();
   
  }

  findOne(id: number) {
    return `This action returns a #${id} donation`;
  }
}
