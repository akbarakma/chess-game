import React from "react";
import HumanVsHuman from "./BoardChess";
import Chessboard from "chessboardjsx";

export default function GamePage() {
  const opponentMove = (onDrop) => {
    onDrop({
      sourceSquare: "b7",
      targetSquare: "b6",
    })
  }
  return (
    <div>
      <HumanVsHuman>
        {({ changeTurn, draggable, position, onDrop, onMouseOverSquare, onMouseOutSquare, squareStyles, dropSquareStyle, onDragOverSquare, onSquareClick, onSquareRightClick }) => {
          return (
            <>
              <Chessboard
                id="humanVsHuman"
                width={640}
                draggable={draggable}
                position={position}
                onDrop={onDrop}
                onMouseOverSquare={onMouseOverSquare}
                onMouseOutSquare={onMouseOutSquare}
                boardStyle={{
                  borderRadius: "5px",
                  boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`,
                }}
                squareStyles={squareStyles}
                dropSquareStyle={dropSquareStyle}
                onDragOverSquare={onDragOverSquare}
                onSquareClick={onSquareClick}
                onSquareRightClick={onSquareRightClick}
              />
              <button onClick={changeTurn}>Change Turn</button>
              <button onClick={() => opponentMove(onDrop)}>Drop</button>
            </>
          );
        }}
      </HumanVsHuman>
    </div>
  );
}
