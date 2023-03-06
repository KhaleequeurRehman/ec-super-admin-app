import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { Button, styled } from "@mui/material";
import dish from "../Assets/dish.png";
import Switch from "../CustomizedSwtich/CustomizedSwitch";
import IconButton from "../IconButton/IconButton";
import Overlay from "../Overlay/Overlay";
// const columns = [
//   { id: 'serial', label: '#', minWidth: 170 },
//   { id: 'image', label: 'Image', minWidth: 100 },
//   {
//     id: 'cuisineName',
//     label: 'Cuisine Name',
//     minWidth: 170,
//     align: 'center',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'numOfMenu',
//     label: 'Num of Menu',
//     minWidth: 170,
//     align: 'center',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'Active',
//     label: 'Active',
//     minWidth: 170,
//     align: 'center',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id:'Action',
//     label:'Action',
//     minWidth:170,
//     align:'center',
//     format: (value) => value.toLocaleString('en-US')
//   }
// ];

function createData(serial, image, cuisineName, numOfMenu, Active, Action) {
  return { serial, image, cuisineName, numOfMenu, Active, Action };
}
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    //   backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  border: "none",
}));
const rows = [
  // createData('1.', <img src={dish} alt="dish icon"/>, "American", 150,<Switch/>,<IconButton/>),
  // createData('2.', <img src={dish} alt="dish icon"/>, "Arabic", 222,<Switch/>,<IconButton />),
  // createData('3.', <img src={dish} alt="dish icon"/>, "Japanese", 32,<Switch/>,<IconButton/>),
  // createData('4.', <img src={dish} alt="dish icon"/>, "Chinese", 52,<Switch/>,<IconButton/>),
  // createData('5.', <img src={dish} alt="dish icon"/>, "France", 16,<Switch/>,<IconButton/>),
  // createData('6.', <img src={dish} alt="dish icon"/>, "Mexican", 72,<Switch/>,<IconButton/>),
  // createData('7.', <img src={dish} alt="dish icon"/>, "Bangladeshi", 82,<Switch/>,<IconButton/>),
  // createData('8.', <img src={dish} alt="dish icon"/>, "Indian", 19,<Switch/>,<IconButton/>),
  // createData('9', <img src={dish} alt="dish icon" />, "Mexican", 130,<Switch/>,<IconButton/>),
  // createData('10', <img src={dish} alt="dish icon"/>, "American", 25,<Switch/>,<IconButton/>),
  // createData('11', <img src={dish} alt="dish icon"/>, "Arabic", 50,<Switch/>,<IconButton/>),
  // createData('12', <img src={dish} alt="dish icon"/>, "Japanese", 65,<Switch/>,<IconButton/>),
  // createData('13', <img src={dish} alt="dish icon"/>, "Chinese", 70,<Switch/>,<IconButton/>),
  // createData('14', <img src={dish} alt="dish icon"/>, "France", 90,<Switch/>,<IconButton/>),
  // createData('15', <img src={dish} alt="dish icon"/>, "Mexican", 85,<Switch/>,<IconButton/>),
];

export default function DataTable({
  hasCheckbox = true,
  columns = [],
  rowsdata = [],
}) {
  const dataTable = rowsdata.map((item) => {
    return createData(
      item.serial,
      <img src={item.img} alt="dish icon" />,
      item.cuisines_name,
      item.num_of_menu,
      item.active,
      item.action,
      item.menu_name
    );
  });

  console.log(dataTable);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [open, setOpen] = React.useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Box
      sx={{
        border: "1px solid #E1E1E6",
        padding: 3,
        borderRadius: "8px",
      }}
    >
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <StyledTableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rowsdata.map((row) => {
                return (
                  <StyledTableRow tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      console.log("column", column);
                      console.log("row", row);
                      const value = row[column.id];
                      console.log("value", value);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "image" ? (
                            <img src={row.img} alt="dish icon" />
                          ) : column.format && typeof value === "number" ? (
                            column.format(value)
                          ) : value}
                        </TableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
