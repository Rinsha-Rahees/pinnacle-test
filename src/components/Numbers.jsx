import React, { useEffect, useState } from "react";

function Numbers() {
  const [arr, setArr] = useState([1, 5, 6, 7, 2]);

  function ascendingOrder() {
    let a = arr.sort((a, b) => a - b);
    setArr([...a]);
  }

  function descOrder() {
    let a = arr.sort((a, b) => b - a);
    setArr([...a]);
  }

  return (
    <div className="flex flex-col">
      <p data-testid="display">{arr}</p>
      <button onClick={() => ascendingOrder()}>Ascending</button>
      <button onClick={() => descOrder()}>Descending</button>
    </div>
  );
}

export default Numbers;
