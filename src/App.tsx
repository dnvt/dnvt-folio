import { useTheme } from 'theming';
import { Theme } from './utils/theme/theme';
import Container from './containers/Container';
import Vertical from "./utils/grid/Vertical";
import Horizontal from "./utils/grid/Horizontal";

const App: React.FC = () => {
  const theme: Theme = useTheme()

  return (
    <>
      <Vertical />
      <Horizontal />
      <Container>
        <h1 style={{ color: theme.text.primary, margin: 0 }}>Hello world!</h1>
      </Container>
    </>
  );
}

export default App;
