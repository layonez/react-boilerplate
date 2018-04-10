import React, { Component } from "react";
import Button from "components/common/Button";
import TextField from "components/common/TextField";
import {
  MdVisibilityOff,
  MdPerson,
  MdVisibility,
  MdLock
} from "react-icons/lib/md";
import { connect } from "react-redux";
import { logIn, logOut } from "actionCreators";
import PropTypes from "prop-types";
import { translate } from "react-i18next";

import styles from "./styles.css";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    showPassword: false
  };

  static propTypes = {
    logIn: PropTypes.func.isRequired,
    logOut: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    t: PropTypes.func.isRequired
  };

  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleUsernameChange = ev => {
    this.setState({ username: ev.target.value });
  };

  handlePasswordChange = ev => {
    this.setState({ password: ev.target.value });
  };

  handleSubmit = () => {
    this.props.logIn(this.state.username, this.state.password);
  };

  handleLogOut = () => {
    this.props.logOut();
  };

  render() {
    const { t } = this.props;

    let visiblePasswordIcon = this.state.showPassword ? (
      <MdVisibilityOff onClick={this.handleClickShowPasssword} />
    ) : (
      <MdVisibility onClick={this.handleClickShowPasssword} />
    );

    return this.props.isLoggedIn ? (
      <Button onClick={this.handleLogOut}>{t("Sign out")}</Button>
    ) : (
      <div className={styles.form}>
        <TextField
          className={cx("text-field")}
          onChange={this.handleUsernameChange}
          label={t("Login")}
          value={this.state.username}
          leftIcon={<MdPerson className={styles.icon} />}
        />
        <TextField
          className={cx("text-field")}
          onChange={this.handlePasswordChange}
          type={this.state.showPassword ? "text" : "password"}
          label={t("Password")}
          value={this.state.password}
          leftIcon={<MdLock className={styles.icon} />}
          rightIcon={visiblePasswordIcon}
        />
        <Button onClick={this.handleSubmit}>{t("Sign in")}</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: !!(state.user && state.user._id)
});

const mapDispatchToProps = {
  logIn,
  logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(
  translate()(LoginForm)
);
