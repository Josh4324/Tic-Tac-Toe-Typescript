import Square from './Square';

import React from 'react'

export default function Board({ xIsNext , squares, onPlay } : {xIsNext: boolean, squares: string[], onPlay:any}) {
    function computerMove(squares : string[]) {
       
        for (let i = 0; i < squares.length; i++) {
          if (squares[i] === null) {

            if (squares[4] === null){
                squares[4] = "O";
                break;
            }

              if (squares[0] === "X" && squares[1] === "X"){
                  if (squares[2] === null){
                      squares[2] = "O";
                      break;
                  }
              }

              if (squares[0] === "X" && squares[2] === "X"){
                if (squares[1] === null){
                    squares[1] = "O";
                    break;
                }
            }

              if (squares[6] === "X" && squares[8] === "X"){
                if (squares[7] === null){
                    squares[7] = "O";
                    break;
                }
            }

            if (squares[7] === "X" && squares[8] === "X"){
                if (squares[6] === null){
                    squares[6] = "O";
                    break;
                }
            }


            if (squares[2] === "X" && squares[8] === "X"){
                if (squares[5] === null){
                    squares[5] = "O";
                    break;
                }
            }

            if (squares[5] === "X" && squares[8] === "X"){
                if (squares[2] === null){
                    squares[2] = "O";
                    break;
                }
            }

            if (squares[1] === "X" && squares[7] === "X"){
                if (squares[4] === null){
                    squares[4] = "O";
                    break;
                }
            }

            if (squares[0] === "X" && squares[6] === "X"){
                if (squares[3] === null){
                    squares[3] = "O";
                    break;
                }
            }

            squares[i] = "O";
            break;
          }
        }
        console.log("sq",squares)
      } 

      function calculateWinner(squares : string[]) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }
    
      function handleClick(i : number) {
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        const nextSquares = squares.slice();
    
        nextSquares[i] = "X";
        computerMove(nextSquares);
       
    
        onPlay(nextSquares);
      }
    
      const winner = calculateWinner(squares);
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
      }
    
      return (
        <>
          <div className="status">{status}</div>
          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
          </div>
          <div className="board-row">
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
          </div>
          <div className="board-row">
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </>
      );
}


