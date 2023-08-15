import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Fragment } from 'react';

function createData(nome, quantidade) {
  return { nome, quantidade };
}

export const PedidoPage = () => {
  const [produto, setProduto] = React.useState('');
  const [quantidade, setQuantidade] = React.useState('');
  const [lista, setList] = React.useState([]);

  const handleProdutoChange = (event) => {
    setProduto(event.target.value);
  };

  const handleQuantidadeChange = (event) => {
    setQuantidade(event.target.value);
  };

  const incluir = () => {
    if(produto === '' || quantidade === '') {
      return
    }
    lista.push(createData(produto, quantidade));
    setProduto('')
    setQuantidade('')
  }

  const submit = () => {
      //API
  }

  return (
    <Fragment>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Produto</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={produto}
            label="Produto"
            onChange={handleProdutoChange}
        >
            <MenuItem value=""/>
            <MenuItem value={'brigadeiro'}>Brigadeiro</MenuItem>
            <MenuItem value={'misto'}>Misto</MenuItem>
            <MenuItem value={'esfirra'}>Enfirra</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className="mt-8">
        <TextField fullWidth onChange={handleQuantidadeChange} value={quantidade} type="number" label="Quantidade" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
      </Box>
      <Box className="mt-8 flex">
        <Button onClick={incluir} style={{marginLeft: 'auto'}} variant="contained">INCLUIR</Button>
      </Box>


      <Box className="mt-10">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Produto</TableCell>
                <TableCell align="center">Quantidade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {lista.map((produto) => (
                <TableRow
                  key={produto.nome}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                  <TableCell component="th" scope="row" align="center">
                    {produto.nome}
                  </TableCell>
                  <TableCell align="center">{produto.quantidade}</TableCell>
                </TableRow>
          ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box className="mt-12">
        <Button onClick={submit} fullWidth variant="contained">CONFIRMAR</Button>
      </Box>
    </Fragment>
  );
}