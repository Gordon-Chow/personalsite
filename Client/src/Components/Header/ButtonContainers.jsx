import React from 'react';
import styles from './ButtonContainers.css';
import { Link } from 'react-router-dom';
import Headerbutton from './Headerbutton.jsx';

class ButtonContainers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const list = ['Home', 'About', 'Project', 'Resume', 'Contact']
    console.log(list)
    return (
      <div className={styles.buttonDiv}>
        {list.map(button =>{
          return <Headerbutton button={button}/>
        })}
      </div>
    )
  }
}

export default ButtonContainers;