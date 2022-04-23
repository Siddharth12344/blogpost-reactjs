import React, { Component } from "react";

class blogpost1 extends Component {
  render() {
    return (
      <div className="post-page">
        <h1>How to protect humans in a fully automated society</h1>
        <p>People have been worried about machines taking jobs for a very long time. As early as 1930, John Maynard Keynes was warning about the new scourge of technological unemployment, which he termed as “unemployment due to our discovery of means of economizing the use of labor outrunning the pace at which we can find new uses for labor.” In short, automating ourselves out of a paycheck.</p>
        <p>The fear has only grown more powerful in the software age. In one recent story, a few automation upgrades ended up making 20 workers redundant at a small 3D-modeling company. A recent McKinsey study estimated that as many as half of current jobs could be automated, and predicted 400 million jobs worldwide will be automated into nothingness by 2030.</p>
        <p className="special-text">What happens when every job is replaced by a machine?</p>
        <p>Set against the backdrop of continuous AI improvements, the picture seems simple enough: machines get a little more capable every day, and every extra bit of intelligence brings a few more jobs within reach of automation. But the reality is more complex, operating at a far larger scale. In most cases, we’re not automating individual jobs but entire industries, as we meet more of our needs through massively scalable software.</p>
        <img src={require('./images/RRH.jpg')}></img>
        <p>It’s a huge shift in the way society works, and it doesn’t have to be a bad one. We just have to look at the big picture.</p>
      </div>
    );
  }
}

export default blogpost1;
