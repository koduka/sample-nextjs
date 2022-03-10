import { Box, Container, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import type { NextPage } from 'next'

const Invoice: NextPage = () => (
  <Container>
    <Typography variant='h2' display='flex' justifyContent='center' sx={{ typography: { md : 'h2', sm: 'h5' } }}>請求書</Typography>

    <Box display='flex' justifyContent="flex-end">
      <Grid container columns={2} alignItems='center' columnSpacing={1} maxWidth='24rem' >
        <Grid item xs={1} display='flex' justifyContent='flex-end'>
          <Typography variant='h6'>No.</Typography>
        </Grid>
        <Grid item xs={1} display='flex' justifyContent='center'>
          <Typography>1234-56789</Typography>
        </Grid>
        <Grid item xs={1} display='flex' justifyContent='flex-end'>
          <Typography variant='h6'>請求日</Typography>
        </Grid>
        <Grid item xs={1} display='flex' justifyContent='center'>
          <Typography>◯◯◯◯年◯◯月◯◯日</Typography>
        </Grid>
      </Grid>
    </Box>

    <Stack direction='row' spacing={2} display='flex' justifyContent='center' alignItems='center' borderBottom={1} maxWidth='24rem'>
      <Typography variant='h4'>サンプル株式会社</Typography>
      <Typography>御中</Typography>
    </Stack>

    <Box mt={2} display='flex' justifyContent='space-between' >
      <Box maxWidth='24rem'>
        <Typography>〒000-0000</Typography>
        <Typography>◯◯県◯◯◯市◯◯◯◯町１６−４−８ ◯◯◯◯ビル ４階</Typography>
      </Box>
      <Box sx={{ display: 'flex', justify: 'flex-end' }} maxWidth='24rem'>
        <Box>
          <Typography variant='h6'>株式会社▲▲▲▲▲▲</Typography>
          <Typography>〒000-0000</Typography>
          <Typography>◯◯県◯◯◯市◯◯◯◯町１６−４−８ ◯◯◯◯ビル ４階</Typography>
        </Box>
        {/* <Box position='relative' >
          <Image src='/inkan.png' layout='fill'/>
        </Box> */}
      </Box>
    </Box>

    <Grid container columnSpacing={2} mt={10} mb={10}>
      <Grid item xs></Grid>
      <Grid item xs={5} display='flex' justifyContent='center' bgcolor='skyblue' border={1}>
        <Typography variant='h2'>ご請求金額</Typography>
      </Grid>
      <Grid item xs={5} display='flex' justifyContent='center' border={1} borderLeft={0}>
        <Typography variant='h2'>¥ 90000 円</Typography>
      </Grid>
      <Grid item xs></Grid>
    </Grid>

    <TableContainer>
      <Table>
        <TableHead sx={{ background: 'skyblue' }}>
          <TableRow>
            <TableCell><Box display='flex' justifyContent='center'>
              <Typography variant='h5'>内容</Typography>
            </Box>
            </TableCell>
            <TableCell>
              <Box display='flex' justifyContent='center'>
                <Typography variant='h5'>単価</Typography>
              </Box>
            </TableCell>
            <TableCell>
              <Box display='flex' justifyContent='center'>
                <Typography variant='h5'>数量</Typography>
              </Box>
            </TableCell>
            <TableCell>
              <Box display='flex' justifyContent='center'>
                <Typography variant='h5'>金額</Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>商品A</TableCell>
            <TableCell>
              <Box display='flex' justifyContent='flex-end'>
                <Typography>¥ 10000</Typography>
              </Box>
            </TableCell>
            <TableCell>
              <Box display='flex' justifyContent='flex-end'>1</Box>
            </TableCell>
            <TableCell>
              <Box display='flex' justifyContent='flex-end'>
                <Typography>¥ 10000</Typography>
              </Box>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>商品B</TableCell>
            <TableCell>
              <Box display='flex' justifyContent='flex-end'>
                <Typography>¥ 10000</Typography>
              </Box>
            </TableCell>
            <TableCell>
              <Box display='flex' justifyContent='flex-end'>1</Box>
            </TableCell>
            <TableCell>
              <Box display='flex' justifyContent='flex-end'>
                <Typography>¥ 10000</Typography>
              </Box>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  </Container >
)

export default Invoice
