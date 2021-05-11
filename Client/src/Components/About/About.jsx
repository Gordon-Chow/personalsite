import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidUpdate(prevProps) {
  //   if(this.props !== prevProps) {
  //     let test = this.props.match.url
  //     let test2 = test.slice(1,test.length-2)
  //     console.log('test2', test2);
  //     this.props.selectedTab(test2)

  //   }
  // }

  componentDidMount() {
    let test = this.props.match.url
    let test2 = test.slice(1,test.length-1)
    console.log('test2', test2);
    this.props.selectedTab(test2)
  }

  render() {
    console.log('asdfasdf',this.props.match.url.slice(1, this.props.match.url.length-1 ))
    return (
      <div> About Me Page still in progress </div>
    )
  }
}

export default About;