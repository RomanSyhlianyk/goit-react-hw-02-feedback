import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLiveFeedback = e => {
    console.log(e);
    const { name } = e.target;
    this.setState(
      prevState => ({ [name]: prevState[name] + 1 }),
      this.countTotalFeedback
    );
  };

  countTotalFeedback = () => {
    this.setState(
      () => ({
        total: this.state.neutral + this.state.good + this.state.bad,
      }),
      this.countPositiveFeedbackPercentage
    );
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(() => ({
      percentage: Math.round((this.state.good / this.state.total) * 100),
    }));
  };

  render() {
    const { good, neutral, bad, total, percentage } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLiveFeedback}
        />
        {this.state.total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    );
  }
}
