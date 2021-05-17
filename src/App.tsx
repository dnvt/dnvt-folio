import Container from './containers/Container'
import GridToggleIcon from './ui/buttons/GridToggleIcon'
import Grid from './utils/grids/Grid'
import Spacer from './utils/spacer/Spacer'
import Font from './utils/fonts/Font'

const App: React.FC = () => {
  // const theme: Theme = useTheme()

  return (
    <>
      <Grid />
      <Container>
        <Spacer height={80} />
        <Font type="h1">Hello World</Font>
        <Font type="h3">This is Francois speaking</Font>
        <Font type="text">This is Francois speaking</Font>
        <GridToggleIcon />
      </Container>
    </>
  )
}

export default App
