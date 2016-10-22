import React from 'react';

class Tab extends React.Component {
  constructor (props) {
    super(props);
    this.state = {currentIndex: 0};
    this.updateIndex = function(currentIndex) {
      this.setState({currentIndex});
    };
  }

  render () {
    return (
      <div className="tabs">
        <ul className="list">
          {this.props.tabs.map((tab, idx) => <li key={idx}  onClick={this.updateIndex.bind(this, idx)}><h1 className="tab">{tab.title}</h1></li>)}
        </ul>
        <article>
          {this.props.tabs[this.state.currentIndex].content}
        </article>
      </div>
    );
  }

}

export default Tab;
