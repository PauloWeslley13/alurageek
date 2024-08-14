import { FC } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { OutlinedInput } from "@mui/material";
import { LogoTipo } from "@/presenter/components/ui";
import * as S from "./styles";

const footerList = [
  "Quem somos",
  "Política de privacidade",
  "Programa de lealdade",
  "Nossas lojas",
  "Quero ser um franqueado",
  "Anuncie aqui",
];

export const FooterContent: FC = () => (
  <S.FooterContainer>
    <S.FooterContent>
      <div style={{ flex: 1 }}>
        <LogoTipo />
      </div>

      <S.FooterList>
        <ul>
          {footerList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </S.FooterList>
    </S.FooterContent>

    <S.FooterForm>
      <Typography
        component="h4"
        variant="h3"
        sx={{ color: (theme) => theme.palette.primary.light }}
      >
        Fale Conosco
      </Typography>

      <form>
        <OutlinedInput size="small" placeholder="Digite seu nome" />
        <OutlinedInput size="small" placeholder="Digite sua mensagem" />

        <Button
          variant="primary"
          sx={{
            height: (theme) => theme.spacing(11),
            textTransform: "uppercase",
            letterSpacing: 1.2,
          }}
        >
          Enviar mensagem
        </Button>
      </form>
    </S.FooterForm>
  </S.FooterContainer>
);
