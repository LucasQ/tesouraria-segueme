import React, { Fragment } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const rows = [
  createData('Marquinhos', 'Comando incompetente', 6.0, 24, 4.0),
  createData('Ferreira', 'Circulo', 9.0, 37, 4.3),
  createData('Queiroga', 'Mini-mercado', 16.0, 24, 6.0),
  createData('Gui', 'Gráfica', 3.7, 67, 4.3),
  createData('Larissa', 'Vigilia e liturgia', 16.0, 49, 3.9),
];

//TODO:: Trazer da api os membros, implementar o filtro, deixar clicable passando dados para o PedidoPage

export const HomeTab = () => (
  <Fragment>
    <div className="flex flex-col">
      <TextField id="standard-basic" label="Nome" variant="standard" className="m-4" />
      <br />
      <TextField id="standard-basic" label="Equipe" variant="standard" />
      <br /><br />
      <Button variant="contained">PESQUISAR</Button>
    </div>
    <div className="mt-10">
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" component={Link} to="/pedido">Membro</StyledTableCell>
              <StyledTableCell align="center">Equipe</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
              </TableRow>
          ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </Fragment>
);
