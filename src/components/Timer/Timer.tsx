interface Props {
  timeLeft: number,
}

export const Timer = ({ timeLeft }: Props) => {
  return <div>Time left: {timeLeft}s</div>;
}
