import React from 'react';
import style from 'styled-components';
import StatBar from './StatBar.jsx';
import TrapComponent from './TrapComponent.jsx';

const Console = style.div`
  min-width: 650px;
  max-width: 1200px;
  font-size: 1.2em;
  margin: auto;
`;

export default class TrapConsole extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }

  render() {
    const {stats, components} = this.state;

    return (
      <Console>
        <StatBar 
          stats={stats}
        />
        <div className="options row">
          <div className="col">
            {components.map(component => {
              return <TrapComponent component={component} />
            })}
            <TrapComponent />
          </div>
        </div>
      </Console>
    )
  }
}

// in order:
// - mitigation upgrades
// - triggers
// - targets
// - effects