import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment } from "@mui/material";
import { useSearchField } from "./hook/useSearchField";

export const SearchField = () => {
  const { search, getSearch } = useSearchField();

  return (
    <OutlinedInput
      size="small"
      type="text"
      placeholder="O que você quer procurar?"
      value={search}
      onChange={getSearch}
      endAdornment={
        <InputAdornment position="start">
          <SearchIcon color="primary" />
        </InputAdornment>
      }
      sx={{
        "& input": {
          width: 320,
          transition: "all .3s ease-in-out",
          "&:focus-visible": {
            width: 450,
          },
        },
      }}
    />
  );
};
