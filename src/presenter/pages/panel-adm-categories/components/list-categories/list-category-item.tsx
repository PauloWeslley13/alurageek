import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionActions from "@mui/material/AccordionActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import { CategoryModel } from "@/domain/models";
import { useCategoryUpdate } from "./hook";

type ListCategoryItemProps = {
  category: CategoryModel;
};

function ListCategoryItem({ category }: ListCategoryItemProps) {
  const { errors, register, handlerCategoryUpdated } = useCategoryUpdate({
    categoryId: category.id,
  });

  return (
    <Accordion
      sx={{
        background: "transparent",
        borderRadius: (theme) => theme.spacing(2),
        boxShadow: (theme) => theme.shadows[0],
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="h5">{category.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <FormControl sx={{ width: "100%" }}>
          <OutlinedInput
            {...register("name")}
            type="text"
            size="small"
            placeholder="Digite o nome da categoria"
            sx={{ width: "100%" }}
          />
          {!!errors.name?.message && (
            <FormHelperText error={!!errors.name?.message}>
              {errors.name?.message}
            </FormHelperText>
          )}
        </FormControl>
      </AccordionDetails>
      <AccordionActions>
        <Button variant="primary" onClick={handlerCategoryUpdated}>
          Atualizar
        </Button>
      </AccordionActions>
    </Accordion>
  );
}

export { ListCategoryItem };
