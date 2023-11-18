import { Length, IsEmail, IsNotEmpty } from "class-validator";
export class SignupDto {

    @IsEmail({},{ message: 'Digite um E-mail válido' })
    email: string;

    @IsNotEmpty({ message: 'O campo nome não pode estar vazio' })
    name: string;

    @Length(8, 20, { message: 'A senha deve ter entre 8 e 20 caracteres' })
    password: string;
}