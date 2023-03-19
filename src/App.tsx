import Header from './components/UI/Header';
import { GameScreen } from './screens';
import './styles/styles.scss?inline';

function App() {
  return (
    <div className=".background">
      <Header />
      <GameScreen />
    </div>
  );
}

export default App;
