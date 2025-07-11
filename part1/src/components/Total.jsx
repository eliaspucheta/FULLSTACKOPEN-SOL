//Total muestra el número total de ejercicios

const Total = (count) => {
  return <p>Number of exercises: {count.count.reduce((a, n) => a + n)}</p>;
};

export default Total;
