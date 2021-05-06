import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Headerbutton.css'

class Headerbutton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)
    return (
        <Link className={styles.buttons}to={`/${this.props.button}`}>{this.props.button}</Link>
    )
  }
}


export default Headerbutton;