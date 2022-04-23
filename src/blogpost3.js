import React, { Component } from "react";
import "./index.css";

class blogpost3 extends Component {
  render() {
    return (
      <div className="post-page">
        <h1>How AI is changing photography.</h1>
        <p>If you’re wondering how good your next phone’s camera is going to be, it’d be wise to pay attention to what the manufacturer has to say about AI. Beyond the hype and bluster, the technology has enabled staggering advances in photography over the past couple of years, and there’s no reason to think that progress will slow down.
        </p>
        <img src={require('./images/aiphoto.jpg')}></img>
        <p>There are still a lot of gimmicks around, to be sure. But the most impressive recent advancements in photography have taken place at the software and silicon level rather than the sensor or lens — and that’s largely thanks to AI giving cameras a better understanding of what they’re looking at.</p>
        <p>Google Photos provided a clear demonstration of how powerful a mix AI and photography would be when the app launched in 2015. Prior to then, the search giant had been using machine learning to categorize images in Google+ for years, but the launch of its Photos app included consumer-facing AI features that would have been unimaginable to most. Users’ disorganized libraries of thousands of untagged photos were transformed into searchable databases overnight.</p>
        <p className="special-text">Suddenly, or so it seemed, Google knew what your cat looked like.</p>
        <p>Google built on the previous work of a 2013 acquisition, DNNresearch, by setting up a deep neural network trained on data that had been labeled by humans. This is called supervised learning; the process involves training the network on millions of images so that it can look for visual clues at the pixel level to help identify the category. Over time, the algorithm gets better and better at recognizing, say, a panda, because it contains the patterns used to correctly identify pandas in the past. It learns where the black fur and white fur tend to be in relation to one another, and how it differs from the hide of a Holstein cow, for example. With further training, it becomes possible to search for more abstract terms such as “animal” or “breakfast,” which may not have common visual indicators but are still immediately obvious to humans.</p>
        <p>It takes a lot of time and processing power to train an algorithm like this, but after the data centers have done their thing, it can be run on low-powered mobile devices without much trouble. The heavy-lifting work has already been done, so once your photos are uploaded to the cloud, Google can use its model to analyze and label the whole library. About a year after Google Photos was launched, Apple announced a photo search feature that was similarly trained on a neural network, but as part of the company’s commitment to privacy the actual categorization is performed on each device’s processor separately without sending the data. This usually takes a day or two and happens in the background following setup.</p>
      </div>
    );
  }
}

export default blogpost3;
