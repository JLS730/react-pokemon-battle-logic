import React from 'react';
import ReactDOM from 'react-dom';

import EnemyHUD from './components/EnemyHUD';
import PlayerHUD from './components/PlayerHUD';
import Menu from './components/Menu';

import './index.css';

const BattleSequence = () => {
  return (
    <div className="background">
      <div className="display-screen">
        <EnemyHUD />
        <PlayerHUD />
        <Menu />
      </div>
    </div>
  )
}

ReactDOM.render(<BattleSequence />, document.getElementById('root'))