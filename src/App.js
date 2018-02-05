import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x1: "0",
      y1: "0",
      x2: "254",
      y2: "0",
      x3: "254",
      y3: "254",
      x4: "0",
      y4: "254",
      radius1: 70,
      direction1: 'up',
      radius2: 78,
      direction2: 'up',
      radius3: 86,
      direction3: 'up',
      radius4: 94,
      direction4: 'up'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);

    setInterval(() => {

      if (this.state.direction1 == 'up') {
        this.setState({radius: this.state.radius1++});
        // console.log('up')
        console.log(this.state.radius1)
        if (this.state.radius1 > 105) {
          // console.log('down');
          this.setState({direction1: 'down'})
        }
      }
      else {
        this.setState({radius: this.state.radius1--});
        // console.log('down')
        console.log(this.state.radius1)
        if (this.state.radius1 < 80) {
          this.setState({direction1: 'up'})
        }
      }

      if (this.state.direction2 == 'up') {
        this.setState({radius: this.state.radius2++});
        // console.log('up')
        console.log(this.state.radius2)
        if (this.state.radius2 > 105) {
          // console.log('down');
          this.setState({direction2: 'down'})
        }
      }
      else {
        this.setState({radius: this.state.radius2--});
        // console.log('down')
        console.log(this.state.radius1)
        if (this.state.radius1 < 80) {
          this.setState({direction2: 'up'})
        }
      }

      if (this.state.direction3 == 'up') {
        this.setState({radius: this.state.radius3++});
        // console.log('up')
        console.log(this.state.radius3)
        if (this.state.radius3 > 105) {
          // console.log('down');
          this.setState({direction3: 'down'})
        }
      }
      else {
        this.setState({radius: this.state.radius3--});
        // console.log('down')
        console.log(this.state.radius3)
        if (this.state.radius3 < 80) {
          this.setState({direction3: 'up'})
        }
      }

      if (this.state.direction4 == 'up') {
        this.setState({radius: this.state.radius4++});
        // console.log('up')
        console.log(this.state.radius4)
        if (this.state.radius4 > 105) {
          // console.log('down');
          this.setState({direction4: 'down'})
        }
      }
      else {
        this.setState({radius: this.state.radius4--});
        // console.log('down')
        console.log(this.state.radius4)
        if (this.state.radius4 < 80) {
          this.setState({direction4: 'up'})
        }
      }



    }, 70)
  }
  componentDidMount() {

  }
  handleChange(event) {
    console.log('x');
    this.setState({x1: event.target.value});
    this.setState({y1: event.target.value});
    // console.log(event.target.value);
  }
  handleChange2(event) {
    console.log('x');
    this.setState({x2: event.target.value});
    this.setState({y2: 254 - event.target.value});
    // console.log(event.target.value);
  }
  handleChange3(event) {
    console.log('x');
    this.setState({x3: event.target.value});
    this.setState({y3: event.target.value});
    // console.log(event.target.value);
  }
  handleChange4(event) {
    console.log(this.state.y4);
    this.setState({x4: event.target.value});
    this.setState({y4: 254 - event.target.value});
    // console.log(event.target.value);
  }
  render() {

    let polygon = `${this.state.x1} ${this.state.y1} ${this.state.x2} ${this.state.y2} ${this.state.x3} ${this.state.y3} ${this.state.x4} ${this.state.y4}`;
    // console.log(polygon);
    let radius1 = this.state.radius1+"%";
    let radius2 = this.state.radius2+"%";
    let radius3 = this.state.radius3+"%";
    let radius4 = this.state.radius4+"%";
    return (
      <div>
        <svg width="500px" height="500px" viewBox="0 0 700 400" version="1.1">
            <defs>
            <radialGradient cx="50%" cy="14.1340756%" fx="50%" fy="14.1340756%" r={radius1} gradientTransform="translate(0.500000,0.141341),scale(0.940424,1.000000),rotate(90.000000),scale(1.000000,1.099146),translate(-0.500000,-0.141341)" id="radialGradient-1">
               <stop stop-color="#73C531" offset="0%"></stop>
               <stop stop-color="#549024" offset="75.7672991%"></stop>
               <stop stop-color="#DEDD05" stop-opacity="0" offset="100%"></stop>
           </radialGradient>
           <radialGradient cx="50%" cy="98.4464585%" fx="50%" fy="98.4464585%" r={radius2} gradientTransform="translate(0.500000,0.984465),scale(0.940424,1.000000),rotate(-90.000000),translate(-0.500000,-0.984465)" id="radialGradient-2">
               <stop stop-color="#73C531" offset="4.67952806%"></stop>
               <stop stop-color="#003F4E" stop-opacity="0" offset="100%"></stop>
           </radialGradient>
           <radialGradient cx="0%" cy="60.773629%" fx="0%" fy="60.773629%" r={radius3} gradientTransform="translate(0.000000,0.607736),scale(0.940424,1.000000),translate(-0.000000,-0.607736)" id="radialGradient-3">
               <stop stop-color="#549024" offset="3.16286671%"></stop>
               <stop stop-color="#008A7D" stop-opacity="0" offset="100%"></stop>
           </radialGradient>
           <radialGradient cx="97.3673328%" cy="63.4841085%" fx="97.3673328%" fy="63.4841085%" r={radius4} gradientTransform="translate(0.973673,0.634841),scale(0.940424,1.000000),rotate(-170.396018),translate(-0.973673,-0.634841)" id="radialGradient-4">
               <stop stop-color="#83BD00" offset="0%"></stop>
               <stop stop-color="#84BD00" stop-opacity="0" offset="100%"></stop>
           </radialGradient>

                <polygon id="path-5" points={polygon}></polygon>
                <filter x="-11.8%" y="-11.8%" width="123.6%" height="123.6%" filterUnits="objectBoundingBox" id="filter-6">
                    <feGaussianBlur stdDeviation="10" in="SourceGraphic"></feGaussianBlur>
                </filter>
            </defs>
            <g id="Desktop" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" >
              <rect id="Rectangle-8" x="0" y="0" width="419" height="419"></rect>
                <g id="Rectangle-6-Copy-2" transform="translate(180.000000, 179.000000) rotate(45.000000) translate(-80.000000, -180.000000) ">
                  <use fill="url(#radialGradient-1)" xlinkHref="#path-5"></use>
                  <use fill="url(#radialGradient-2)" xlinkHref="#path-5"></use>
                  <use fill="url(#radialGradient-3)" xlinkHref="#path-5"></use>
                  <use fill="url(#radialGradient-4)" xlinkHref="#path-5"></use>
                </g>
                <g id="Rectangle-6-Copy-3" filter="url(#filter-6)" transform="translate(180.000000, 179.000000) rotate(45.000000) translate(-80.000000, -180.000000) ">
                  <use fill="url(#radialGradient-1)" xlinkHref="#path-5"></use>
                  <use fill="url(#radialGradient-2)" xlinkHref="#path-5"></use>
                  <use fill="url(#radialGradient-3)" xlinkHref="#path-5"></use>
                  <use fill="url(#radialGradient-4)" xlinkHref="#path-5"></use>
                </g>
            </g>
        </svg>
        <div>
          <input value={this.state.x1} onChange={this.handleChange} type="range" min="0" max="127"></input>
          <br/>
          <input value={this.state.x2} onChange={this.handleChange2} type="range" min="127" max="254"></input>
          <br/>
          <input value={this.state.x3} onChange={this.handleChange3} type="range" min="127" max="254"></input>
          <br/>
          <input value={this.state.x4} onChange={this.handleChange4} type="range" min="0" max="127"></input>
        </div>
      </div>

    );
  }
}

export default App;
