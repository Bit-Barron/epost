import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  email: string;

  @IsString()
  id: number;

  @IsString()
  string: string;

  @IsString()
  pasword: string;
}
