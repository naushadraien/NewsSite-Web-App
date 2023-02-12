import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default class App extends Component {
  pageSize = 5;
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        {/* Passed pageSize as a props in url  to display 5 content in a page*/}
        {/* <News pageSize={this.pageSize} country="in" category="sports" /> */}
        <Routes>
            {/* Here key="" is given to load exact content without reloading the page */}
            <Route path="/" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/business" element={<News key="business" pageSize={this.pageSize} country="in" category="business" />} />
            <Route path="/science" element={<News key="science" pageSize={this.pageSize} country="in" category="science" />} />
            <Route path="/general" element={<News key="general" pageSize={this.pageSize} country="in" category="general" />} />
            <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} country="in" category="sports" />} />
            <Route path="/health" element={<News key="health" pageSize={this.pageSize} country="in" category="health" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" />} />
            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} country="in" category="technology" />} />

          </Routes>
        </Router>
      </div>
    )
  }
}

