import { ApiProperty } from "@nestjs/swagger"

export class CreateInvFestDto {
    @ApiProperty()
    id:number
    @ApiProperty()
    title:string
    @ApiProperty()
    description:string
    @ApiProperty()
    dayFest:number 
    @ApiProperty()
    monthFest:string
    @ApiProperty()
    beginCountry:string
    @ApiProperty()
    continent:string
}




