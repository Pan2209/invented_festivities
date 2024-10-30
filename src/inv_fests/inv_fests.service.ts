import { Injectable } from '@nestjs/common';
import { CreateInvFestDto } from './dto/create-inv_fest.dto';
import { UpdateInvFestDto } from './dto/update-inv_fest.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import internal from 'stream';

@Injectable()
export class InvFestsService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  constructor(private orm: PrismaService) {}

  create(createInvFestDto: CreateInvFestDto) {
    return this.orm.invented_festivities.create({
      data: createInvFestDto,
    });
  }

  findByTitleFestivities(title: string) {
    return this.orm.invented_festivities.findMany({
      where: { title },
    }); //BUSCAR POR TITULO
  }

  findByContinentFestivities(continent: string) {
    return this.orm.invented_festivities.findMany({
      where: { continent },
    }); //BUSCAR POR CONTINENTE
  }

  findByCountryFestivities(beginCountry:string){
    return this.orm.invented_festivities.findMany({
      where: { beginCountry },
  });
}

  findByDayFestivities(dayFest: number) {
    return this.orm.invented_festivities.findMany({
      where: { dayFest },
    }); //BUSCAR POR DIA
  }

  findByMonthFestivities(monthFest: string) {
    return this.orm.invented_festivities.findMany({
      where: { monthFest },
    }); //BUSCAR POR MES
  }

  findOne(id: number) {
    return this.orm.invented_festivities.findUnique({
      where: { id },
    });
  }

  update(id: number, updateInvFestDto: UpdateInvFestDto) {
    return this.orm.invented_festivities.update({
      where: { id },
      data: updateInvFestDto,
    });
  }

  remove(id: number) {
    return this.orm.invented_festivities.delete({
      where: { id },
    });
  }
}
