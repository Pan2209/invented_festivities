import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvFestsService } from './inv_fests.service';
import { CreateInvFestDto } from './dto/create-inv_fest.dto';
import { UpdateInvFestDto } from './dto/update-inv_fest.dto';

@Controller('inv-fests')
export class InvFestsController {
  constructor(private readonly invFestsService: InvFestsService) {}

  @Post()
  create(@Body() createInvFestDto: CreateInvFestDto) {
    return this.invFestsService.create(createInvFestDto);
  }

   @Get()
  findByContinent(@Body() continent: string) {
    return this.invFestsService.findByContinentFestivities(continent);
  }//BUSCAR POR CONTINENTE

@Get()
findByDay(@Body() dayFest:number){
  return this.invFestsService.findByDayFestivities(dayFest)
}//Buscar por dia



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invFestsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvFestDto: UpdateInvFestDto) {
    return this.invFestsService.update(+id, updateInvFestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invFestsService.remove(+id);
  }
}
