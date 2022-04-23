import React, { Component } from "react";

class blogpost2 extends Component {
  render() {
    return (
      <div className="post-page">
        <h1>AI could be the perfect tool for exploring the Universe</h1>
        <p>In our efforts to understand the Universe, we’re getting greedy, making more observations than we know what to do with. Satellites beam down hundreds of terabytes of information each year, and one telescope under construction in Chile will produce 15 terabytes of pictures of space every night. It’s impossible for humans to sift through it all. As astronomer Carlo Enrico Petrillo told The Verge: “Looking at images of galaxies is the most romantic part of our job. The problem is staying focused.” That’s why Petrillo trained an AI program to do the looking for him.</p>
        <p>Petrillo and his colleagues were searching for a phenomenon that’s basically a space telescope. When a massive object (a galaxy or a black hole) comes between a distant light source and an observer on Earth, it bends the space and light around it, creating a lens that gives astronomers a closer look at incredibly old, distant parts of the Universe that should be blocked from view. This is called a gravitational lens, and these lenses are key to understanding what the Universe is made of. So far, though, finding them has been slow and tedious work.</p>
        <img src={require('./images/universe.jpg')}></img>
        <p>That’s where artificial intelligence comes in — and finding gravitational lenses is just the start. As Stanford professor Andrew Ng once put it, the capacity of AI is being able to automate anything “a typical person can do [...] with less than one second of thought.” Less than a second doesn’t sound like much room for thinking, but when it comes to sifting through the vast amounts of data created by contemporary astronomy, it’s a godsend.
        </p>
        <p>This wave of AI astronomers aren’t just thinking how this technology can sort data. They’re exploring what could be an entirely new mode of scientific discovery, where artificial intelligence maps out the parts of the Universe we’ve never even seen.</p>

      </div>
    );
  }
}

export default blogpost2;
