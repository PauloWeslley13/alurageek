import { FC, ReactNode } from "react";
import { Container, Typography } from "@mui/material";
import { Loader } from "@/presenter/components/ui";
import { ProductModel } from "@/domain/models";
import ProductCarousel from "./product-carousel";
import * as S from "./styles";

type ProductsListProps = {
  title: string;
  products: ProductModel[];
  isLoading: boolean;
  children?: ReactNode;
};

export const ProductsList: FC<ProductsListProps> = ({
  title = "",
  isLoading = false,
  products = [],
  children,
}) => {
  if (isLoading) {
    return (
      <Loader.Content message="Carregando produtos" sx={{ height: 250 }} />
    );
  }

  return (
    <Container maxWidth="lg">
      <S.ProductListContainer>
        <div>
          <Typography component="h3" variant="h2">
            {title}
          </Typography>

          {children && children}
        </div>

        {products.length <= 0 && (
          <Typography
            component="h3"
            variant="h2"
            sx={{ mt: 3, textAlign: "center" }}
          >
            Produto indisponível
          </Typography>
        )}

        {!isLoading && (
          <>{products && <ProductCarousel product={products} />}</>
        )}
      </S.ProductListContainer>
    </Container>
  );
};
