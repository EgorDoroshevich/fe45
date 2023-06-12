import React, { useState } from "react";

import FormPagesContainer from "src/components/FormPagesContainer";
import styles from "./SignIn.module.scss";
import Input from "src/components/Input";
import classNames from "classnames";
import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {themeValue} = useThemeContext();
  return (
    <FormPagesContainer
      title={"Sign In"}
      btnTitle={"Sign In"}
      onSubmit={() => {}}
      additionalInfo={
        <div className={classNames(styles.additionalInfo, {[styles.darkAdditionalInfo]: themeValue === Theme.Dark})}>
          {"Don’t have an account?"}
          <span className={styles.signUp}>Sign Up</span>
        </div>
      }
    >
      <Input title={"Email"} placeholder={"Your email"} onChange={setEmail} value={email} />
      <div>
        <Input title={"Password"} placeholder={"Your password"} onChange={setPassword} value={password} />
        <div className={styles.forgotPassword}>Forgot password?</div>
      </div>
    </FormPagesContainer>
  );
};
export default SignIn;