import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

function Morpion() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  const handleClick = (index: number) => {
    const newBoard = [...board];

    if (calculateWinner(newBoard) || newBoard[index]) {
      return;
    }

    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      if (winner === 'X') {
        setScoreX(scoreX + 1);
      } else {
        setScoreO(scoreO + 1);
      }
      handleReset();
    } else if (!board.includes(null)) {
      // Si toutes les cases sont remplies sans gagnant, c'est une égalité
      handleReset();
    }
  }, [board, scoreX, scoreO]);

  const renderSquare = (index: number) => {
    const value = board[index];
    let squareContent;

    if (value === 'X') {
      squareContent = <img src="https://cdn.discordapp.com/emojis/760753334054551572.gif?size=128&quality=lossless" alt="X" />;
    } else if (value === 'O') {
      squareContent = <img src="https://cdn.discordapp.com/emojis/770397971681902592.gif?size=128&quality=lossless" alt="O" />;
    } else {
      squareContent = null;
    }

    return (
      <button className={styles.square} onClick={() => handleClick(index)}>
        {squareContent}
      </button>
    );
  };

  const winner = calculateWinner(board);
  let status;
  if (winner) {
    status = 'Gagnant : ' + winner;
  } else if (!board.includes(null)) {
    status = 'Égalité !';
  } else {
    status = 'Prochain joueur : ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div className={styles.container}>
      <div className={styles.status}>{status}</div>
      <div className={styles['board-container']}>
        <div className={styles.board}>
          {Array(3)
            .fill(null)
            .map((_, row) => (
              <div key={row} className={styles.boardRow}>
                {Array(3)
                  .fill(null)
                  .map((_, col) => renderSquare(row * 3 + col))}
              </div>
            ))}
        </div>
      </div>
      <div className={styles.score}>
        <p>Score X: {scoreX}</p>
        <p>Score O: {scoreO}</p>
      </div>
      <button className={styles.resetButton} onClick={handleReset}>
        Réinitialiser
      </button>
    </div>
  );
}


// Fonction pour calculer le gagnant
function calculateWinner(squares: string[]): string | null {
  const lines: number[][] = [
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

export default Morpion;







/*function calculateWinner(squares: string[]): string | null {
    const lines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];*/