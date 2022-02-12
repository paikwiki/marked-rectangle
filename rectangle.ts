import { GET_RECT_ERROR_MESSAGE, MARK_ON_RECTANGLE_ERROR_MESSAGE } from "./constants";
import { log } from "./log";

interface Rectangle {
  width: number;
  height: number;
  serializedRows: string;
}

interface GetRectParam {
  width: number;
  height: number;
  filledWith?: string;
}
export const getRect = ({
  width,
  height,
  filledWith: backgroundCharacter = "o",
}: GetRectParam): Rectangle => {
  if (width < 0 || height < 0)
    throw new Error(GET_RECT_ERROR_MESSAGE)
  return {
    width,
    height,
    serializedRows: backgroundCharacter.repeat(width * height),
  };
};

export const drawRectangle = ({ width, serializedRows }: Rectangle) => {
  let formattedRectangle = "";

  while (serializedRows.length > 0) {
    formattedRectangle = formattedRectangle.concat(
      `${serializedRows.slice(0, width)}\n`
    );
    serializedRows = serializedRows.slice(width);
  }
  log(formattedRectangle);
};

interface MarkOnRectangleParam {
  rectangle: Rectangle;
  x: number;
  y: number;
  markerCharacter: string;
}
export const markOnRectangle = ({
  rectangle,
  x,
  y,
  markerCharacter,
}: MarkOnRectangleParam): Rectangle => {
  const { width, height, serializedRows } = rectangle;

  if (x < 0 || y < 0 || x >= width || y >= height)
    throw new Error(MARK_ON_RECTANGLE_ERROR_MESSAGE);

  const serializedMarkerIndex = width * y + x;
  return {
    ...rectangle,
    serializedRows:
      serializedRows.substring(0, serializedMarkerIndex) +
      markerCharacter +
      serializedRows.substring(serializedMarkerIndex + 1),
  };
};
