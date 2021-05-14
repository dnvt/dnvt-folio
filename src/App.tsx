import { useTheme } from 'theming';
import { Theme } from './utils/theme';

function App() {
  const theme: Theme = useTheme()

  return (
    <div style={{ width: "100vw", minHeight: "100vh", height: "auto" }}>
      <h1 style={{ color: theme.text.primary }}>
        Hello world!
    </h1>
    </div>
  );
}

export default App;
