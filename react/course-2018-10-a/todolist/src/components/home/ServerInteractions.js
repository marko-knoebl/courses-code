import React, { PureComponent } from 'react';

class ServerInteractions extends PureComponent {
  render() {
    return (
      <div>
        <h1>GraphQL Server Interactions</h1>
        <button onClick={this.props.loadTodosGraphql}>load todos</button>
      </div>
    );
  }
}

export default ServerInteractions;
