import React from 'react';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let test = this.props.match.url
    let test2 = test.slice(1,test.length-1)
    console.log('test2', test2);
    this.props.selectedTab(test2)
  }

  render() {
    return (
      <div> Projects Page still in progress </div>
    )
  }
}

export default Projects;