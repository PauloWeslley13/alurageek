import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Paper from '@mui/material/Paper'
import { useCategoryList } from '@/presenter/hooks/useCategoryList'
import { ListCategoryItem } from './list-category-item'

function ListCategories() {
  const { categories, isLoading } = useCategoryList()

  if (isLoading) {
    return (
      <Stack sx={{ width: '100%', justifyContent: 'center', mt: 5 }}>
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Stack>
    )
  }

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        marginTop: 5,
        bgcolor: (theme) => theme.palette.background.default,
        borderRadius: (theme) => theme.spacing(2),
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ borderColor: (theme) => theme.palette.primary.light }}
            >
              <Typography variant="h4" color="primary">
                Categorias
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {categories.map((category) => (
            <TableRow
              key={category.id}
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ borderColor: (theme) => theme.palette.primary.light }}
              >
                <ListCategoryItem category={category} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export { ListCategories }
