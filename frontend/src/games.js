
import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default class Games extends React.Component{

  render(){
    return (
      <div>
        <div> <h1> Tic Tac Toe </h1> </div>
        <Game />
      </div>
    )
  }
}

function Square (props) {
  return props.color? (<button className="square" style= {{backgroundColor: "yellow"}} onClick = {() => props.onClick()}>
       {props.value}
     </button>) :
  (<button className="square" onClick = {() => props.onClick()}>
       {props.value}
     </button>);
}

class Board extends React.Component {
  renderSquare(i, color) {
    if (color){
      return <Square
             value={this.props.board[i]}
             onClick={()=> this.props.onClick(i) }
             color={color}/>;
    }else{
      return <Square
               value={this.props.board[i]}
               onClick={()=> this.props.onClick(i) }
               />;
    }
  }
  render() {
    let result = [];
    for (let i=0; i<3; i++){
      let row = [];
       for (let j=0; j<3; j++){
         let index= i*3+j;
         console.log('', this.props.winning);
         if (this.props.winning && this.props.winning.includes(index)){
             row.push(this.renderSquare(index, 1));
         }else{
           row.push(this.renderSquare(index));
         }
      }
      result.push(<div className="board-row">{row}</div>);
    }
    return (
      <div>
        {result}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      history: [
        {
          board: Array(9).fill(null)
        }],
      xIsNext: true,
      key: 0,
      asc: true
    }
  }

  handleClick(i) {
    const board = this.state.history[this.state.key].board.slice();
    if (!board[i]){
      if (this.state.xIsNext){
        board[i] = 'X';
      }else{
        board[i] = 'O';
      }
      const oldHistory = this.state.history.slice(0, this.state.key+1);
      oldHistory.push({board: board});
      this.setState({
        history: oldHistory,
        xIsNext: !this.state.xIsNext,
        key: oldHistory.length-1
      });
    }else{
      return;
    }
  }

  jumpTo(stepNum){
    this.setState({
      key: stepNum,
      xIsNext: (stepNum%2)? false: true,
    })
  }

  toggle(){
    if (this.state.asc){
      this.setState({
        asc: false
      });
    }else{
      this.setState({
        asc: true
      });
    }
  }

  render() {
    console.log('key', this.state.key);
    let moves = this.state.history.map((step, move) => {
      const desc = move ?
          'Move #' + move :
          'Game start';
      return (this.state.key === move)? (<li key={move}>
          <a href="#" onClick={() =>
              this.jumpTo(move)}><strong>{desc}</strong></a>
          </li>) : (<li key={move}>
          <a href="#" onClick={() =>
              this.jumpTo(move)}>{desc}</a>
          </li>);
    });

    if (!this.state.asc){
      moves=moves.reverse();
    }


    let next = 'X';
    if (!this.state.xIsNext){
      next='O';
    }
    console.log('board', this.state.history[this.state.key].board);
    let winner = calculateWinner(this.state.history[this.state.key].board);

    let status = 'Next player: ' + next;
    let indicesArr;
    if (winner.winner){
      status=`Winner = ${winner.winner}`;
      indicesArr=winner.line;
      console.log(indicesArr);
    }
    let sort;
    if (this.state.asc){
      sort = "Ascending"
    }else{
      sort = "Descending"
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board
            board= {this.state.history[this.state.key].board}
            onClick = {(i) => this.handleClick(i)}
            winning={indicesArr}/>
        </div>
        <div className="game-info">

          <div>{status}</div>
          Sort Moves: <button onClick = {() => this.toggle() }> {sort} </button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


function calculateWinner(board) {
  let wins = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]];
  for (var i=0; i<wins.length; i++){
    if (board[wins[i][0]] === board[wins[i][1]] && board[wins[i][1]] === board[wins[i][2]] && board[wins[i][0]] === board[wins[i][2]]){
      return {
        winner: board[wins[i][0]],
        line: wins[i]
      };
    }
  }
  return {
    winner: null,
    line: null
  };
}
