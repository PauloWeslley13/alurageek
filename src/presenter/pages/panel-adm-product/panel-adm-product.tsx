import {
  Backdrop,
  Box,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FormCreateProduct, UploadImage } from "./components";
import { StyledContainer } from "./styles";
import { useAppSelector } from "@/main/store/hook/useRedux";

function PanelAdmProduct() {
  const { isLoading } = useAppSelector((state) => state.products);

  return (
    <StyledContainer>
      <Backdrop
        sx={{
          color: (theme) => theme.palette.common.white,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isLoading}
      >
        <Stack
          component={Paper}
          elevation={1}
          sx={{
            p: 5,
            borderRadius: 50,
            bgcolor: (theme) => theme.palette.primary.dark,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="inherit" size={65} />
        </Stack>
      </Backdrop>

      <Box sx={{ gridColumn: "span 1", textAlign: "center" }}>
        <Typography variant="h4">Fazer upload da imagem</Typography>

        <UploadImage />
      </Box>

      <FormCreateProduct />
    </StyledContainer>
  );
}

export default PanelAdmProduct;
