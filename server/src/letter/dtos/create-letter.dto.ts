import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateLetterDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsNumber()
  pages: number;

  @IsNumber()
  price: number;

  @IsNumber()
  posts: number;

  @IsString()
  envelope: string;

  userId: number;
}
