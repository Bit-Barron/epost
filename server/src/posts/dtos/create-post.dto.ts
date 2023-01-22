import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  post: string;

  @IsString()
  id: number;

  @IsString()
  betreff: string;
}
