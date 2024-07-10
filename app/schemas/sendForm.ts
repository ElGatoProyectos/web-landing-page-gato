import { z } from 'zod';

export const sendFormSchema = z.object({
    country_code: z.string()
    .min(1, {message: 'Por favor seleccione su código de país'}),
    fullname: z
        .string()
        .min(2, {
            message: 'El nombre completo es requerido'
        }),
    company: z.string()
        .min(1, { message: 'El nombre de la empresa es requerido' }),
    email: z.string()
        .email({ message: 'Formato de email incorrecto | ejemplo@gmail.com' }),
    phone: z.string()
    .regex(/^\d{7,15}$/, { message: 'El número de celular debe ser numérico y tener entre 7 y 15 dígitos' }),
    ideaDescription: z.string()
        .min(1, { message: 'Por favor, cuéntanos tu idea o proyecto' })


});