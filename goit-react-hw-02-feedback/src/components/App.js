import { Component } from 'react';

import Controls from './Controls';
import Statistics from './Statistics';

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    precent: this.props.initialValue,
  };

  incrementValue = e => {
    const name = e.target.name;
    this.setState(prevState => {
      return {
        [name]: (prevState[name] += 1),
      };
    });
    this.countTotalValue();
    this.incrementPrecentValue();
  };

  countTotalValue = () => {
    this.setState(prevState => {
      return { total: prevState.neutral + prevState.bad + prevState.good };
    });
  };
  incrementPrecentValue = () => {
    this.setState(prevState => {
      return {
        precent: Math.round((prevState.good / prevState.total) * 100),
      };
    });
  };

  render() {
    const { good, bad, neutral, total, precent } = this.state;
    return (
      <>
        <Controls
          onLeaveFeedback={this.incrementValue}
          options={['good', 'neutral', 'bad']}
        />
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={total}
          precent={precent}
        />
      </>
    );
  }
}

export default App;
