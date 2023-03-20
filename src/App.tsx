import { Header } from './components/UI';
import { GameScreen } from './screens';
import './styles/styles.scss';

export const App = () => {
  return (
    <div className="background">
      <Header />
      <GameScreen />
    </div>
  );
}
