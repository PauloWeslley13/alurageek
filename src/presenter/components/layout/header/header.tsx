import Button from "@mui/material/Button";
import { StyledHeading } from "./styles";

export function Header() {
  return (
    <StyledHeading>
      <div>
        <h3>Fevereiro Promocional</h3>
        <span>Produtos selecionados com 33% de desconto</span>

        <Button
          variant="primary"
          sx={{
            width: (theme) => theme.spacing(40),
            height: (theme) => theme.spacing(12),
          }}
        >
          Promoções
        </Button>
      </div>
    </StyledHeading>
  );
}
