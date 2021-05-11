import React from 'react';
import styles from './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps) {

  }

  componentDidMount() {
    let test = this.props.match.url
    let test2 = test.slice(1,test.length-1)
    console.log('test2', test2);
    this.props.selectedTab('Home')
  }

  render() {
    console.log('123',this.props)
    console.log('current page', this.props.match.url)

    return (
      <div>
        <div> Home Page still in progress </div>
        <div id={styles.sectionOne}>Section1
        <div className={styles.testbox}></div>
        </div>
        <div id={styles.sectionTwo}>Section2</div>
      </div>
    )
  }
}

export default Home;