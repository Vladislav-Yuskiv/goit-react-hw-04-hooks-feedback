
import React , {useState} from 'react';
import Statistics from './Components/Statistics';
import FeedbackOptions from './Components/FeedbackOptions';
import Section from './Components/Seaction';
import Notification from './Components/Notification';

function App () {

  
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
   
   const handleButtonClick = (e) => {
      const { name } = e.currentTarget;
      
      switch (name) {
         case 'good':
            setGood(good + 1)
            break;
         case 'neutral':
            setNeutral(neutral + 1)
            break;
         case 'bad':
            setBad(bad + 1)
            break;
         default:
            return;
      }
         
        
   }

      const countTotalFeedback = good + neutral + bad;
      const countPositiveFeedbackPercentage = Math.floor((good / countTotalFeedback) * 100);
      return (
    <>
       
         <Section title={'Please leave feedback'}>
            <FeedbackOptions
               options={['good', 'neutral', 'bad']}
               onLeaveFeedback={handleButtonClick}
            />
         </Section>
         <Section title={'Statistics'}>
            {countTotalFeedback ? (
                  <Statistics 
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={countTotalFeedback}
                        positivePercentage={countPositiveFeedbackPercentage}
                  />
               ) : null}

            {countTotalFeedback ? null : <Notification message="No feedback given" />}
         </Section> 
    </>
    
 );
 }


export default App;


