const ErrorExample = () => {
  let count = 0
  const counter = () => {
    count = count + 1
    console.log(count);
  }
  return (
    <>
    <h2>{count}</h2>
    <button type="button" onClick={counter}>Increase</button>
    </>
  );
};

export default ErrorExample;
