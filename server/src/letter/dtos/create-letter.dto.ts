import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateLetterDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNumber()
  @IsOptional()
  pages: number;

  @IsNumber()
  price: number;

  @IsNumber()
  @IsOptional()
  posts: number;

  @IsString()
  envelope: string;

  @IsOptional()
  @IsString()
  documents: string;

  userId: number;
}
