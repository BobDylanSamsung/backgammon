import './App.css';
import {Stack, Typography} from "@mui/material";
import {Board} from "./components/Board.tsx";

function App() {
  return (
      <Stack alignItems="center" spacing={5}>
        <Typography>Welcome to Backgammon</Typography>
        <Board />
      </Stack>
  );
}

export default App;
