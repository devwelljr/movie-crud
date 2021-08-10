import React, { Component } from 'react';
import './NotFound.css';

class NotFound extends Component {
  render() {
    return <div id="error" data-testid="404-error">Página não encontrada</div>;
  }
}

export default NotFound;
