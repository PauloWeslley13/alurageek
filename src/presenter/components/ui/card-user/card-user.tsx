import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { alpha } from "@mui/material/styles";
import { useAppSelector } from "@/main/store/hook/useRedux";
import { Avatar } from "@/presenter/components/ui";

export function CardUser() {
  const { user } = useAppSelector((state) => state.authentication);

  return (
    <Stack direction="row" alignItems="center" gap={2.5}>
      <Avatar user={user?.username || ""} src={user?.photoUrl || ""} />

      <div>
        <Typography
          component="h2"
          variant="h4"
          color={(theme) => theme.palette.primary.light}
          fontSize={(theme) => theme.typography.pxToRem(17)}
          textTransform="capitalize"
          textAlign="left"
        >
          {user?.username || ""}
        </Typography>
        <Typography
          component="span"
          variant="caption"
          fontFamily={(theme) => theme.typography.font.OPEN_SANS}
          fontWeight={(theme) => theme.typography.font.semibold}
          color={(theme) =>
            theme.palette.mode === "light"
              ? alpha(theme.palette.grey[800], 0.6)
              : alpha(theme.palette.grey[400], 0.6)
          }
        >
          {user?.email || ""}
        </Typography>
      </div>
    </Stack>
  );
}
