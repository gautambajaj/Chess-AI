# Chess-AI
* A simple Chess-AI built in JavaScript, supporting multiple difficulty levels for the bot.
* Used the open-source library [chessboard.js](http://chessboardjs.com/) for game UI

## How it Works
Each possible move by the AI is assigned a numerical score using an evaluation function obtained from [chess-wiki](https://chessprogramming.wikispaces.com/Simplified+evaluation+function). The evaluation function assigns a score to each chess piece based on the piece's type and position on the board. For example, a knight on the center of the board is better (because it has more options and is more active) than a knight on the edge of the board. 

With this evaluation function, we’re able to assign a numerical score to any given move. For each possible next move, a decision tree is then made and evaluated using the [minimax algorithm](https://en.wikipedia.org/wiki/Minimax). A tree depth of 3 is easily achieved with [alpha-beta pruning](https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning). The AI finally decides to make a move that leads to the subtree with the highest possible evaluation.

## Try it out here: https://simple-chessai.herokuapp.com/
