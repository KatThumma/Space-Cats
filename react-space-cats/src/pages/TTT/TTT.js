import React, { Component } from "react";
import './TTT.css';

import Announcement from '../../components/Announcement';
import ResetButton from '../../components/ResetButton';
import Tile from '../../components/Tile';

class gameOne extends Component {
  constructor() {
    super();

    this.state = {
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ], 
      turn: 'x',
      winner: null,
      maxPlayer: 'x',
      minPlayer: 'o',
    }
  }

  tie(board){
    let moves = board.join('').replace(/ /g, '');
    if(moves.length === 9){
      return true;
    }
  }

  winner(board, player){
    if(
      (board[0] === player && board[1] === player && board[2]=== player) ||
      (board[3] === player && board[4] === player && board[5]=== player) ||
      (board[6] === player && board[7] === player && board[8]=== player) ||
      (board[0] === player && board[3] === player && board[6]=== player) ||
      (board[1] === player && board[4] === player && board[7]=== player) ||
      (board[2] === player && board[5] === player && board[8]=== player) ||
      (board[0] === player && board[4] === player && board[8]=== player) ||
      (board[2] === player && board[4] === player && board[6]=== player)
    ){
      return true;
    } else {
      return null;
    }
  }

  copyBoard(board){
    return board.slice(0);
  }

  validMove(move, player, board){
    let newBoard = this.copyBoard(board);
    if(newBoard[move] === ' '){
      newBoard[move] = player;
      return newBoard
    } else {
      return null;
    }
  }

  findAiMove(board){
    let bestMoveScore = 100;
    let move = null;
    //test allpossible moves if game isn't over
    if(this.winner(board, 'x') || this.winner(board,'o') || this.tie(board)) {
      return null;
    }
    for(let i = 0; i < board.length; i++){
      let newBoard = this.validMove(i, this.state.minPlayer, board);
      if(newBoard) {
        let moveScore = this.maxScore(newBoard);
        if(moveScore < bestMoveScore) {
          bestMoveScore = moveScore;
          move = i;
        }
      }
    }
    return move;
  }

  minScore(board) {
    if(this.winner(board, 'x')) {
      return 10;
    } else if (this.winner(board, 'o')) {
      return -10;
    } else if(this.tie(board)){
      return 0;
    } else {
      let bestMoveValue = 100;
      for(let i = 0; i < board.length; i++){
        let newBoard = this.validMove(i, this.state.minPlayer, board);
        if(newBoard){
          let predictMoveValue = this.maxScore(newBoard);
          if(predictMoveValue < bestMoveValue){
            bestMoveValue = predictMoveValue;
          }
        }
      }
      return bestMoveValue;
    }
  }

  maxScore(board) {
    if(this.winner(board, 'x')) {
      return 10;
    } else if (this.winner(board, 'o')) {
      return -10;
    } else if(this.tie(board)){
      return 0;
    } else {
      let bestMoveValue = -100;
      for(let i = 0; i < board.length; i++){
        let newBoard = this.validMove(i, this.state.minPlayer, board);
        if(newBoard){
          let predictMoveValue = this.minScore(newBoard);
          if(predictMoveValue > bestMoveValue){
            bestMoveValue = predictMoveValue;
          }
        }
      }
      return bestMoveValue;
    }
  }

  gameLoop(move){
    let player = this.state.turn;
    let currentGameBoard = this.validMove(move, player, this.state.gameBoard);
    if(this.winner(currentGameBoard, player)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: player
      });
      return;
    }
    if(this.tie(currentGameBoard)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: 'd'
      });
      return;
    }
    player = 'o';
    currentGameBoard = this.validMove(this.findAiMove(currentGameBoard), player, currentGameBoard);
    if(this.winner(currentGameBoard, player)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: player
      });
      return;
    }
    if(this.tie(currentGameBoard)){
      this.setState({
        gameBoard: currentGameBoard,
        winner: 'd'
      });
      return;
    }
    this.setState({
      gameBoard: currentGameBoard
    });
  }


  resetBoard() {
    this.setState({
        gameBoard: [
          ' ', ' ', ' ',
          ' ', ' ', ' ',
          ' ', ' ', ' '
        ], 
        turn: 'x',
        winner: null,
        maxPlayer: 'x',
        minPlayer: 'o',
    })
  }

  render() {
    return (
      <div className="gameCont">
          <h1>Tic-Tac-Toebeans</h1>
        <div className="menu">
          <Announcement 
          winner={this.state.winner}/>
          <ResetButton reset={this.resetBoard.bind(this)}/>
        </div>
        
        {this.state.gameBoard.map((value, i) => {
          return (
            <Tile 
            key={i}
            loc={i}
            value={value}
            gameLoop={this.gameLoop.bind(this)} />
          );
        })}
      </div>
    );
  }
}



export default gameOne;