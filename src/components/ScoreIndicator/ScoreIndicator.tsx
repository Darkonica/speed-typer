interface Props {
  score: number,
}

export const ScoreIndicator = ({ score }: Props) => {
  return <div>Your score: {score}</div>;
}