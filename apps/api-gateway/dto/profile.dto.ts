import {IsNotEmpty } from "class-validator";
export class ProfileDto {
    @IsNotEmpty({ message: 'O campo Data de Nascimento não pode estar vazio' })
    dateBirth: Date;

    @IsNotEmpty({ message: 'O campo Descrição não pode estar vazio' })
    resume: string;
}