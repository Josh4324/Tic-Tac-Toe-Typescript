import React from 'react'

export default function Square({ value , onSquareClick }: {value: string, onSquareClick: any}) {
  return (
    <button className="square"  onClick={onSquareClick}>
    {value}
  </button>
  )
}
