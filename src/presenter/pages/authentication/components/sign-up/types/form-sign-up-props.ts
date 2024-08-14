import { z } from "zod";

export const schemaSignUp = z.object({
  email: z.string().email({ message: "Informe um email válido" }),
  username: z.string().min(1, { message: "Informe seu nome" }),
  password: z.string().min(6, { message: "Informe uma senha válida" }),
  photoUrl: z.string().min(1, { message: "Informe uma url válida" }),
});

export type SignUpProps = z.infer<typeof schemaSignUp>;
