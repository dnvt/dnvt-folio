import { useTheme } from 'theming'
import { Theme } from './utils/theme/theme'
import Container from './containers/Container'
import GridToggleIcon from './ui/buttons/GridToggleIcon'
import Grid from './utils/grid/Grid'
import Spacer from './utils/spacer/Spacer'

const App: React.FC = () => {
  const theme: Theme = useTheme()

  return (
    <>
      <Grid />
      <Container>
        <Spacer height={80} />
        <h1 style={{ height: 32, color: theme.text.primary, margin: 0 }}>Hello world!</h1>
        <h2 style={{ height: 16, color: theme.text.primary }}>This is my new website</h2>
        <GridToggleIcon />
      </Container>
    </>
  )
}

export default App
