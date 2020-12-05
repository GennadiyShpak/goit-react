import React, { Component } from 'react';
import Controls from './Controls';
import Section from './Section';
import Statistics from './Statistics';
// import s from './Feedback.module.css';

class Feedback extends Component {
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

  incrementGoodValue = () => {
    this.setState(prevState => {
      return {
        good: (prevState.good += 1),
      };
    });
    this.incrementTotalValue();
    this.incrementPrecentValue();
  };
  incrementNeutralValue = () => {
    this.setState(prevState => {
      return {
        neutral: (prevState.neutral += 1),
      };
    });
    this.incrementTotalValue();
    this.incrementPrecentValue();
  };
  incrementBadValue = () => {
    this.setState(prevState => {
      return {
        bad: (prevState.bad += 1),
      };
    });
    this.incrementTotalValue();
    this.incrementPrecentValue();
  };

  incrementTotalValue = () => {
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
    const {
      incrementGoodValue,
      incrementBadValue,
      incrementNeutralValue,
    } = this;
    const { good, bad, neutral, total, precent } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <Controls
            onGood={incrementGoodValue}
            onBad={incrementBadValue}
            onNeutral={incrementNeutralValue}
          />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <p>No feedback given</p>
          ) : (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              precent={precent}
            />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
