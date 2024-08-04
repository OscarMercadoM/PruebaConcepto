import "./App.css";
import { GetPost } from "./api/crud";
import {
  Box,
  Typography,
  Table,
  Button,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useEffect, useState } from "react";

export type PostType = {
  id: number;
  body: string;
  userId: number;
  title: string;
};
function App() {
  const [data, setData] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetPost<PostType[]>();
      setData(response.data);
    };

    fetchData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <Typography style={{ marginBottom: "5px" }}>
        Prueba de concepto
      </Typography>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Body</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left" component="th" scope="row">
                    {row.body}
                  </TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{row.userId}</TableCell>
                  <TableCell align="left">
                    <DeleteForeverIcon /> <EditNoteIcon />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}

export default App;
