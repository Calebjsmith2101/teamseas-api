import { DonationsResolver } from './donations.resolver';
import { DonationsService } from './donations.service';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  providers: [PrismaService,DonationsResolver, DonationsService]
})
export class DonationsModule {}
