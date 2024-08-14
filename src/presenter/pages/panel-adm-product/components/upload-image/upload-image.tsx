import { Box, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import UploadFileRoundedIcon from "@mui/icons-material/UploadFileRounded";
import { useUploadFile } from "@/presenter/hooks/useUploadFile/useUploadFile";
import { useAppSelector } from "@/main/store/hook/useRedux";
import { Label, VisuallyHidden } from "./styles";
import { CircularProgressWithLabel } from "@/presenter/components/ui";

const UploadImage = () => {
  const { prevFileURL, progress } = useAppSelector((state) => state.upload);
  const { handleChangeFile, handleStorageFirebase } = useUploadFile();

  if (progress) {
    return (
      <Box sx={{ height: 200, mt: 20 }}>
        <CircularProgressWithLabel value={progress} size={60} />
      </Box>
    );
  }

  return (
    <>
      <Label htmlFor="file-upload" prevFile={prevFileURL}>
        {prevFileURL ? (
          <Stack
            sx={{
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              height: 400,
              width: 400,
            }}
          >
            <img
              src={prevFileURL}
              loading="lazy"
              alt="previa de imagem"
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 10,
              }}
            />
            <UploadFileRoundedIcon
              fontSize="large"
              sx={{ position: "absolute" }}
            />
          </Stack>
        ) : (
          <>
            <UploadFileRoundedIcon />
            <span>Clique para fazer upload</span>
            <Typography component="span" variant="body1" color="primary.main">
              JPG, JPEG ou PNG (max. 3MB)
            </Typography>
          </>
        )}

        <VisuallyHidden>
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            onChange={handleChangeFile}
          />
        </VisuallyHidden>
      </Label>

      <Button
        variant="primary"
        startIcon={<CloudUploadIcon />}
        sx={{ mt: 3, width: 350, height: 45 }}
        onClick={handleStorageFirebase}
      >
        Upload file
      </Button>
    </>
  );
};

export { UploadImage };
