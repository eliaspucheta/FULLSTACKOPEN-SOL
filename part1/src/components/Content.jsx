//Content muestra las partes y su número de ejercicios

import Part1 from "./Part1";
import Part2 from "./Part2";
import Part3 from "./Part3";

const Content = (content) => {
  <div>
    <Part1 part={content[0]} />
    <Part2 />
    <Part3 />
  </div>;
};

export default Content;
