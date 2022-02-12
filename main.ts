import { drawRectangle, getRectangle, markOnRectangle } from "./rectangle";

const main = () => {
  const markedRectangle = markOnRectangle({
    rectangle: getRectangle({ width: 6, height: 4 }),
    x: 4,
    y: 2,
    markerCharacter: "v",
  });

  drawRectangle(markedRectangle);
};
main();
