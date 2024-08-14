import { alpha, darken } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog } from "@/presenter/components/ui";
import { ProductModel } from "@/domain/models";
import { useDialogEditProduct } from "./hook";
import { FormEditProduct } from "./form-edit-product";

type DialogEditProductProps = {
  product: ProductModel;
};

export function DialogEditProduct({ product }: DialogEditProductProps) {
  const {
    isDialogProductUpdateOpen,
    handleOpenDialogProductUpdate,
    handleCloseDialogProductUpdate,
  } = useDialogEditProduct();

  return (
    <>
      <IconButton
        onClick={handleOpenDialogProductUpdate}
        sx={{
          color: (theme) => theme.palette.primary.main,
          ":hover": {
            color: (theme) => darken(theme.palette.primary.dark, 0.9),
            background: (theme) => {
              return alpha(theme.palette.primary.contrastText, 0.3);
            },
          },
        }}
      >
        <BorderColorIcon />
      </IconButton>

      <Dialog.Root
        open={isDialogProductUpdateOpen}
        onClose={handleCloseDialogProductUpdate}
        aria-labelledby="dialog-product-updated-title"
        aria-describedby="dialog-product-updated-description"
      >
        <Dialog.Header id="dialog-product-updated-title" title={product.name}>
          <IconButton onClick={handleCloseDialogProductUpdate}>
            <CloseIcon sx={{ color: (theme) => theme.palette.grey[500] }} />
          </IconButton>
        </Dialog.Header>

        <Dialog.Content
          sx={{
            width: 500,
            "& > form": {
              display: "flex",
              flexDirection: "column",
              gap: (theme) => theme.spacing(2),
            },
          }}
        >
          <FormEditProduct
            product={product}
            onCloseDialog={handleCloseDialogProductUpdate}
          />
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
