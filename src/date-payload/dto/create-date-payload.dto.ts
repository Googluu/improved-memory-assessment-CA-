import { IsString } from "class-validator";

export class CreateDatePayloadDto {
    @IsString()
    date: string;
}
