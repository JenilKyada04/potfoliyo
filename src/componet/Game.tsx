import { useState } from "react";

type Player = "X" | "O" | null;

const Game = () => {
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <section className="relative min-h-screen bg-[#020617] flex items-center justify-center overflow-hidden">

      {/* 🔵 Glow Background */}
      <div
        className="
          absolute
          w-[300px] h-[300px]
          md:w-[500px] md:h-[500px]
          bg-indigo-500/25
          rounded-full
          blur-[120px]
          md:blur-[160px]
        "
      />

      {/* 🎮 Game Card */}
      <div
        className="
          relative z-10
          w-full max-w-sm
          bg-[#020617]/80
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-8
          text-white
          shadow-2xl
        "
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          🎮 Tic Tac Toe
        </h1>

        {/* Board */}
        <div className="grid grid-cols-3 gap-3 place-items-center">
          {board.map((value, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className="
                w-20 h-20
                bg-gray-800
                rounded-xl
                text-4xl font-bold
                flex items-center justify-center
                hover:bg-gray-700
                transition
              "
            >
              {value}
            </button>
          ))}
        </div>

        {/* Status */}
        <p className="mt-6 text-center text-lg">
          {winner
            ? `🏆 Winner: ${winner}`
            : board.every(Boolean)
            ? "😐 Draw!"
            : `Next Player: ${isXNext ? "X" : "O"}`}
        </p>

        {/* Reset Button */}
        <button
          onClick={resetGame}
          className="
            mt-4 w-full py-2
            bg-indigo-600
            rounded-lg
            hover:bg-indigo-700
            transition
            font-semibold
          "
        >
          Restart Game
        </button>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Jenil Kyada
        </p>
      </div>
    </section>
  );
};

function calculateWinner(board: Player[]) {
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

  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default Game;
