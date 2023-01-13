import { IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  post: string;
}
