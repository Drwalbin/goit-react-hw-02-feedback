import React, { useEffect, useState } from "react";
import { Section } from "./section/Section";
import { FeedbackOptions } from './feedbackOptions/FeedbackOptions';
import { Statistic } from './statistic/Statistic';
import { Notification } from './notification/Notification';


const countTotalFeedback = (g, n, b) => {
  return g + n + b;
};

const countPositivePercentage = (g, total) => {
  let percentage = Math.floor(((g / total) * 100).toFixed(0));
  if (isNaN(percentage)) {
    return 0;
  } else return percentage;
};


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  useEffect(() => {
    setTotal(countTotalFeedback(good, neutral, bad));
    setPositive(countPositivePercentage(good, total));
  }, [good, neutral, bad, total]);

  const fooOnLeaveFeedback = feedbackOpt => {
    switch (feedbackOpt) {
      case 'good':
        incrementGood();
        break;
      case 'neutral':
        incrementNeutral();
        break;
      case 'bad':
        incrementBad();
        break;
      default:
        return 0;
    }
  };



  return (
    <div
      style={{
   height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
        padding: '20px 10px',
      }}
    >
     <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={fooOnLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistic">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        )}
      </Section>
      
    </div>
  );
};

