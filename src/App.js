import { ThemeProvider } from 'styled-components';
import theme from "./theme";
import Button from "./components/Button";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="button-grid">
          <div>
            <h1>Default</h1>
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button size="sm">Default sm</Button>
            <Button size="md">Default md</Button>
            <Button size="lg">Default lg</Button>
          </div>
          <div>
            <h1>Outline</h1>
            <Button variant="outline">Outline</Button>
            <Button variant="outline"disabled>Outline Disabled</Button>
            <Button variant="outline" size="sm">Outline sm</Button>
            <Button variant="outline" size="md">Outline md</Button>
            <Button variant="outline" size="lg">Outline lg</Button>
          </div>
          <div>
            <h1>Text</h1>
            <Button variant="text">Outline</Button>
            <Button variant="text" disabled>Text Disabled</Button>
            <Button variant="text" size="sm">Text sm</Button>
            <Button variant="text" size="md">Text md</Button>
            <Button variant="text" size="lg">Text lg</Button>
          </div>
        </div>
      </div>
      </ThemeProvider>
  );
}
