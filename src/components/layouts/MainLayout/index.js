import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';
import Header from './Header';
import Footer from './Footer';

class MainLayout extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div className={styles.mainLayout}>
        <Header />
        <div className={styles.main}>
          <div className={styles.container}>
            {this.props.children}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MainLayout;
