
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import PomoWork from "./PomodoroWork";
import PomoRest from "./PomodoroRest";


function App() {

  let [pomodoro, setPomodoro] = useState(null)

  const handleClickWork = () => {
    setPomodoro(state => state = <PomoWork />);
  }
  const handleClickRest = () => {
    setPomodoro(state => state = <PomoRest />);
  }



  return (
    <div className="App">
      <header className="App-header">

        <div style={{ border: "5px white"}}>

        <h2> Pomodoro watch</h2>

        <div>
          {pomodoro}
        </div>



        <h6> Click start pomodoro status</h6>
        <div>
          <Button style={{
                          margin: "0.5em",
                          width: "90px",
                          height: "50px",
                        }}
                  variant="success" onClick={handleClickWork}>
            To Work
          </Button>

          <Button style={{
                          margin: "0.5em",
                          width: "90px",
                          height: "50px",
                        }}
                   variant="success" onClick={handleClickRest}>
            Rest
          </Button>

        </div>

        </div>


      </header>
    </div>
  );
}

export default App;
