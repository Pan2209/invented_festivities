import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvFestsService } from './inv_fests.service';
import { CreateInvFestDto } from './dto/create-inv_fest.dto';
import { UpdateInvFestDto } from './dto/update-inv_fest.dto';
import { ApiTags } from '@nestjs/swagger';
import { title } from 'process';

@Controller('inv-fests')

@ApiTags ('inv-fests')

export class InvFestsController {
  constructor(private readonly invFestsService: InvFestsService) {}
  @ApiTags ('CREATE NEW FESTIVITIE')
  @Post()
  create(@Body() createInvFestDto: CreateInvFestDto) {
    return this.invFestsService.create(createInvFestDto);
  }@ApiTags('SEARCH BY TITLE')
  @Get('title/:title')
  findByTitle(@Param('title') title: string) {
    return this.invFestsService.findByTitleFestivities(title);
  }
  
  @ApiTags('SEARCH BY DAY')
  @Get('day/:dayFest')
  findByDayFest(@Param('dayFest') dayFest: number) {
    return this.invFestsService.findByDayFestivities(+dayFest);
  }
  
  @ApiTags('SEARCH BY MONTH')
  @Get('month/:monthFest')
  findByMonth(@Param('monthFest') monthFest: string) {
    return this.invFestsService.findByMonthFestivities(monthFest);
  }
  
  @ApiTags('SEARCH BY COUNTRY')
  @Get('country/:beginCountry')
  findByCountry(@Param('beginCountry') beginCountry: string) {
    return this.invFestsService.findByCountryFestivities(beginCountry);
  }
  
  @ApiTags('SEARCH BY CONTINENT')
  @Get('continent/:continent')
  findByContinent(@Param('continent') continent: string) {
    return this.invFestsService.findByContinentFestivities(continent);
  }
  
  @ApiTags('SEARCH BY ID')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.invFestsService.findOne(+id);
  }
  @ApiTags ('CHANGE INFORMATION')
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvFestDto: UpdateInvFestDto) {
    return this.invFestsService.update(+id, updateInvFestDto);
  }
  @ApiTags ('DELETE FESTIVITIE')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.invFestsService.remove(+id);
  }
}
