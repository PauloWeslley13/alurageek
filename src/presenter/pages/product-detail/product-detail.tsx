import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import Skeleton from "@mui/material/Skeleton";
import { useTheme } from "@mui/material/styles";
import { ProductsList } from "@/presenter/components/layout";
import { useAppSelector } from "@/main/store/hook/useRedux";
import { useProductsFilter } from "@/presenter/hooks/useProductsFilter";
import { useProductDetail } from "./hook";
import * as S from "./styles";
import { useFormatted } from "@/presenter/hooks/useFormatted";

function ProductDetail() {
  const { isLoading } = useAppSelector((state) => state.products);
  const {
    product: { name, price, description, imageUrl },
    isLoading: loader,
  } = useAppSelector((state) => state.productDetail);
  const { user } = useAppSelector((state) => state.authentication);
  const { productsFilter } = useProductsFilter();
  const { handlerAddProductCart } = useProductDetail();
  const theme = useTheme();
  const { formatted } = useFormatted();

  return (
    <Container maxWidth="lg">
      <S.ProductContainer>
        <div>
          {loader && (
            <Skeleton
              variant="rectangular"
              width={theme.spacing(156.5)}
              height={theme.spacing(140.5)}
            />
          )}

          {!loader && <img src={imageUrl} alt="Foto do produto" />}
        </div>

        {loader && (
          <Stack sx={{ width: "100%", justifyContent: "center" }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Stack>
        )}

        {!loader && (
          <Stack sx={{ flexDirection: "column", gap: 2 }}>
            <Typography
              component="h3"
              variant="h1"
              sx={{
                fontSize: (theme) => theme.typography.font["6xl"],
                textTransform: "capitalize",
              }}
            >
              {name}
            </Typography>
            <Typography
              component="span"
              variant="h3"
              sx={{
                fontFamily: (theme) => theme.typography.font.OPEN_SANS,
                color: (theme) => theme.palette.grey[400],
              }}
            >
              {formatted.priceMask(price)}
            </Typography>
            <Stack sx={{ flexDirection: "row", alignItems: "center", gap: 2 }}>
              <Rating name="read-only" value={3} readOnly />

              <Divider orientation="vertical" variant="fullWidth" flexItem />

              <Typography
                component="span"
                variant="subtitle1"
                sx={{ color: (theme) => theme.palette.grey[400] }}
              >
                5 Customer Review
              </Typography>
            </Stack>
            <Typography component="p" variant="subtitle1" sx={{ mt: 3 }}>
              {description}
            </Typography>
            {user?.accessToken && (
              <Stack sx={{ mt: (theme) => theme.spacing(3) }}>
                <Button
                  sx={{ width: "fit-content" }}
                  variant="primary"
                  endIcon={<AddShoppingCartIcon />}
                  onClick={handlerAddProductCart}
                >
                  Adicionar ao carrinho
                </Button>
              </Stack>
            )}
          </Stack>
        )}
      </S.ProductContainer>

      <Divider variant="middle" />

      <ProductsList
        title="Produtos similares"
        products={productsFilter}
        isLoading={isLoading}
      />
    </Container>
  );
}

export default ProductDetail;
