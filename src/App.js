import React, { Component } from 'react';
import logo from './logo.svg';
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
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
    console.log(polygon);

    return (
      <div>
        <svg width="500px" height="500px" viewBox="0 0 700 400" version="1.1">
            <defs>
                <radialGradient cx="0%" cy="0%" fx="0%" fy="0%" r="141.421356%" id="radialGradient-1">
                    <stop stopColor="#FFD100" offset="0%"></stop>
                    <stop stopColor="#FFD100" stopOpacity="0" offset="100%"></stop>
                </radialGradient>
                <radialGradient cx="100%" cy="100%" fx="100%" fy="100%" r="99.680708%" id="radialGradient-2">
                    <stop stopColor="#003F4E" offset="0%"></stop>
                    <stop stopColor="#003F4E" stopOpacity="0" offset="100%"></stop>
                </radialGradient>
                <radialGradient cx="0%" cy="100%" fx="0%" fy="100%" r="100.206061%" id="radialGradient-3">
                    <stop stopColor="#00C3B0" offset="0%"></stop>
                    <stop stopColor="#008A7D" stopOpacity="0" offset="100%"></stop>
                </radialGradient>
                <radialGradient cx="100%" cy="0%" fx="100%" fy="0%" r="99.4583461%" id="radialGradient-4">
                    <stop stopColor="#84BD00" offset="0%"></stop>
                    <stop stopColor="#84BD00" stopOpacity="0" offset="100%"></stop>
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


/*
// <polygon id="path-5" points="0 0 254 0 254 254 0 254"></polygon>

*/
