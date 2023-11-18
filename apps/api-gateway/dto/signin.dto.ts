
import { Length, IsEmail } from "class-validator";
export class SigninDto {

    @IsEmail({},{message: 'Digite um E-mail válido'})
    email: string;

    @Length(8, 20, { message: 'A senha deve ter entre 8 e 20 caracteres' })
    password: string;
}