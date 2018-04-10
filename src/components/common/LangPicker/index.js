import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MdLanguage from 'react-icons/lib/md/language';
import { translate } from 'react-i18next';

import classNames from 'classnames/bind';
import styles from './styles.css';
let cx = classNames.bind(styles);

class LangPicker extends Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired,
    className: PropTypes.string,
  };

  state = {
    open: false,
  };

  languages = {
    'ru-RU': 'рус',
    'en-EN': 'eng',
    'tr-TR': 'tür',
  };

  handleOutsideClick = (e) => {
    // ignore clicks on the component itself
    if (this.langPickerEl.contains(e.target)) {
      return;
    }

    this.toggleOpen();
  }

  toggleOpen = () => {
    if (!this.state.open) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState({ open: !this.state.open });
  };

  handleChangeLocale = (locale, i18n) => {
    i18n.changeLanguage(locale);

    this.toggleOpen();
  };

  render() {
    const { i18n } = this.props;

    return (
      <div className={cx('langContainer', this.props.className)} ref={(el) => this.langPickerEl = el}>
        <div className={cx('currentLang')} onClick={this.toggleOpen}>
          <MdLanguage className={styles.glob} />
          <span>{this.languages[i18n.language]}</span>
        </div>
        <ul className={styles.langList} style={{ display: this.state.open ? 'block' : 'none' }}>
          {Object.keys(this.languages).map((langKey) =>
            <li key={langKey} onClick={() => this.handleChangeLocale(langKey, i18n)}>{this.languages[langKey]}</li>
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  locale: state.i18n,
});

export default connect(
  mapStateToProps
)(translate()(LangPicker));
