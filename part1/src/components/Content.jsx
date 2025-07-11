//Content muestra las partes y su número de ejercicios

import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

const Content = (content) => {
  return (
    <div>
      <Part1 part={content.content} />
      <Part2 part={content.content} />
      <Part3 part={content.content} />
    </div>
  );
};

export default Content;
