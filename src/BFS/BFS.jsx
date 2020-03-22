import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './BFS.css';

export default class BFS extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount(){
      this.setState({
        canvasSize: {canvasWidth: 800, canvasHeight: 600}
      })
  }

  componentDidMount() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;

    this.canvasHex.width = canvasWidth;
    this.canvasHex.height = canvasHeight;
    this.drawHex(this.canvasHex, { x: 50, y: 50});
  }

  getHexCornerCoord(center, i){}
    let angle_deg = 60 * i - 30;
    let angle_rad = Math.PI / 180 * angle_deg;

    let x = center.x + this.state.hexSize * cos(angle_rad);
    let y = center.y + this.state.hexSize * sin(angle_rad);
    return this.Point(x, y);

      }

  render() {
    return (
      <div className="BFS">
        <canvas ref={ canvasHex => this.canvasHex = canvasHex}></canvas>
      </div>
    )
  }




}
