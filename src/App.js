import "./App.css";
import { useEffect, useState } from "react";
import Sqaure from "./components/Square";
import { patterns } from "./patterns";
let f;

const App = () => {
    const [board, setBoard] =  useState(["", "", "", "", "", "", "", "",""]);
    const [player, setPlayer] = useState("X");
    const [result, setResult] = useState({win: "none", state: "none"});

    useEffect(() => {
        checkWin();
        checkTie();

        if(f) {
            if(player == "X") setPlayer("O");
            else setPlayer("X");
        }
    }, [board]);

    const chooseSquare = (square) => {
        f = 0;

        setBoard(board.map((val, ind) => {
            if(ind == square && val == "") {
                f = 1;
                return player;
            }
            else return val;
        }))
    };

    const checkWin = () => {
        patterns.forEach((pat) => {
            const curPlayer = board[pat[0]];
            if(curPlayer == "") return;
            let found = true;

            pat.forEach((idx) => {
                if(board[idx] != curPlayer) {
                    found = false;
                }
            })

            if(found) {
                setResult({win: player, state: "won"});
            }
        })
    };

    const restart = () => {
        setBoard(["", "", "", "", "", "", "", "",""]);
        setResult({win: "none", state: "none"});
        setPlayer("O");
    };

    const checkTie = () => {
        let filled = true;

        board.forEach((square) =>{
            if(square == "") filled = false;
        })

        if(filled && result.state == "none") {
            setResult({win: "No one", state: "Tie"});
        }
    };

    return (
        <div className="App">
            <>
            <h1>TIC TAC TOE</h1>
            <div className="board">
                <div className="row">
                    <Sqaure val={ board[0] } chooseSquare={() => chooseSquare(0)}/>
                    <Sqaure val={ board[1] } chooseSquare={() => chooseSquare(1)}/>
                    <Sqaure val={ board[2] } chooseSquare={() => chooseSquare(2)}/>
                </div>
                <div className="row">
                    <Sqaure val={ board[3] } chooseSquare={() => chooseSquare(3)}/>
                    <Sqaure val={ board[4] } chooseSquare={() => chooseSquare(4)}/>
                    <Sqaure val={ board[5] } chooseSquare={() => chooseSquare(5)}/>
                </div>
                <div className="row">
                    <Sqaure val={ board[6] } chooseSquare={() => chooseSquare(6)}/>
                    <Sqaure val={ board[7] } chooseSquare={() => chooseSquare(7)}/>
                    <Sqaure val={ board[8] } chooseSquare={() => chooseSquare(8)}/>
                </div>
            </div>
            <div className="guide">
                { result.state == "none" ? (<p>Player : {player}</p>) : result.state == "won" ? (<p>Winner : {player == "X" ? "O" : "X"}</p>) : (<p>Game Tie!</p>) }
                <button className="restart" onClick={()=>restart()}>Restart</button>
            </div>
            </>
        </div>
    );
}
 
export default App;