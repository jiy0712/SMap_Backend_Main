import { IsOptional, IsString, MaxLength } from 'class-validator';

export class GetNewsQueryDto {
  @IsOptional()
  @IsString()
  @MaxLength(500)
  crimeType?: string; 
}
