import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
import bp1 from './bp1.xml';

class Main extends Component {
  render() {
    return (
      // <HashRouter>
      <div>
        <div>
          <h1 className="blog-heading">AI Blog Posts</h1>
        </div>
        <div className="blog-posts">
          <div className="post">
            <Link to="/blogpost1">
              <img className="blog-post-image" src={require('./images/RRH.jpg')}></img>
            </Link> 
            <Link to="/blogpost1" className="title-link">
              <h1 className="post-title">How to protect humans in a fully automated society</h1>
            </Link>
            <div className="center"><time datetime="2019-02-1">Feb 1, 2019</time></div>
            <div className="center"> Russell Brandom</div>
            <p>
            What happens when every job is replaced by a machine?The fear has only grown more powerful in the software age....
            <Link to="/blogpost1">
                Read More
            </Link>
            </p>
          </div>
          <div className="post">
            <Link to="/blogpost2">
              <img className="blog-post-image" src={require('./images/universe.jpg')}></img>
            </Link>
            <Link to="/blogpost2" className="title-link">
              <h1 className="post-title">AI could be the perfect tool for exploring the Universe</h1>
            </Link>
            <div className="center"><time datetime="2017-11-15">Nov 15, 2017</time></div>
            <div className="center"> James Vincent</div>
            <p>
            In our efforts to understand the Universe, we’re getting greedy, making more observations than we know what to do with... 
            <Link to="/blogpost2">                         
                Read More
            </Link>
            </p>
          </div>
          
          <div className="post">
            <Link to="/blogpost3">
              <img className="blog-post-image" src={require('./images/aiphoto.jpg')}></img>
            </Link>
            <Link to="/blogpost3" className="title-link">
              <h1 className="post-title">How AI is changing photography</h1>
            </Link>
            <div className="center"><time datetime="2019-01-31">Jan 31, 2019</time></div>
            <div className="center"> Sam Byford</div>
            <p>
            Cameras’ biggest recent advancements have come from AI, not sensors and lenses...
            <Link to="/blogpost3">
                Read More
            </Link>
            </p>
          </div>
          <div className="clear-fix">
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
