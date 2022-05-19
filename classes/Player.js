import Board from "./Board.js";

class Player {
  constructor(max_depth = -1) {
    this.max_depth = max_depth;
    this.nodes_map = new Map();
  }

  getBestMove(board, maximizing = true, depth = 0) {
    if (board.constructor.name !== "Board")
      throw "The first argument to the getBestMove method should be an instance of Board class.";

    if (depth == 0) this.nodes_map.clear();

    if (board.isTerminal() || depth == this.max_depth) {
      if (board.isTerminal().winner == "x") {
        return 100 - depth;
      } else if (board.isTerminal().winner == "o") {
        return -100 + depth;
      }
      return 0;
    }
    if (maximizing) {
      var function_compare = Math.max;
      var jogador = "x";
      var best = -100;
    }
    if (!maximizing) {
      var function_compare = Math.min;
      var jogador = "o";
      var best = 100;
    }

    board.getAvailableMoves().forEach((index) => {
      let child = new Board(board.state.slice());
      child.insert(jogador, index);

      let node_value = this.getBestMove(child, !maximizing, depth + 1);
      best = function_compare(best, node_value);

      if (depth == 0) {
        var moves = this.nodes_map.has(node_value)
          ? `${this.nodes_map.get(node_value)},${index}`
          : index;
        this.nodes_map.set(node_value, moves);
      }
    });
    if (depth == 0) {
      if (typeof this.nodes_map.get(best) == "string") {
        var arr = this.nodes_map.get(best).split(",");
        var rand = Math.floor(Math.random() * arr.length);
        var ret = arr[rand];
      } else {
        ret = this.nodes_map.get(best);
      }
      return ret;
    }
    return best;
  }
}

export default Player;
