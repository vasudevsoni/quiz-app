function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPossiblePoints) * 100).toFixed(1);
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🥈";
  if (percentage >= 60 && percentage < 80) emoji = "🥉";
  if (percentage >= 30 && percentage < 60) emoji = "😊";
  else emoji = "😟";

  return (
    <>
      <p className="result">
        {emoji} You scored <strong>{points}</strong> points out of{" "}
        {maxPossiblePoints}. That's {percentage}%.
      </p>
      <p className="highscore">(Your best score: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
