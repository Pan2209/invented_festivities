import { Module } from '@nestjs/common';
import { InvFestsService } from './inv_fests.service';
import { InvFestsController } from './inv_fests.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [InvFestsController],
  providers: [InvFestsService],
  imports:[PrismaModule]
})
export class InvFestsModule {}
