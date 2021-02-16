import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Button from "./components/Button";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="button-grid">
          <Button color="primary" startIcon="cloudUpload">
            Primary
          </Button>
          <Button color="primary" endIcon="addTask">
            Primary
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
