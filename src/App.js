import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">

      <div className="Vol">
        <Button name="VolumeUp" />
        <Button name="VolumeMute" />
        <Button name="VolumeDown" />
      </div>

      <div className="Top">
      <Button name= "Back"/>
      <Button name="Home" />
      <Button name= "PowerOff"/>
    </div>

      <Button name="Up" txt="↑"/>

      <div className="middleButton">
        <Button name="Left" txt="←" />
        <Button name="Select" />
        <Button name="Right" txt = "→"/>
      </div>
      
      <Button name="Down" txt="↓"/>
    </div>
  );
}


class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: this.props.name, txt : this.props.txt};
  }

  render() {
    return (
      <button onClick={() => this.buttonPress()}>{this.state.name} {this.state.txt} </button>
    );
  }

  buttonPress() {
    fetch('http://192.168.1.114:8060/keypress/' + this.state.name, {method: 'POST'})
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));

      console.log('Button pressed: ' + this.state.name);
  }

}

export default App;
