import ReactDOM from 'react-dom';
import ScoreIndicator from './ScoreIndicator';
import { render } from '@testing-library/react';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScoreIndicator />, div);
});

test('renders ScoreIndicator correctly', () => {
  render(<ScoreIndicator score="5" />);
});
