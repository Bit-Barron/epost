import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLetterDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  content: string;

  @IsNumber()
  @IsOptional()
  pages: number;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsNumber()
  @IsOptional()
  posts: number;

  @IsString()
  @IsOptional()
  envelope: string;

  @IsOptional()
  @IsString()
  documents: string;

  @IsString()
  @IsOptional()
  side: string;

  userId: number;
}
