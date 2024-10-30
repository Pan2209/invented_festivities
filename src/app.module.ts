import { Module } from '@nestjs/common';
  import { AppService } from './app.service';
import { InvFestsModule } from './inv_fests/inv_fests.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [InvFestsModule, PrismaModule],
  providers: [AppService],
})
export class AppModule {}
