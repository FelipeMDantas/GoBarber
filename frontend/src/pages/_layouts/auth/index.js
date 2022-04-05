import { Wrapper, Content } from "./styles";
import PropTypes from "prop-types";

export default function AuthLayout({ children }) {
  console.tron.log('auth/index')
  //console.tron.log('auth/index { children }: ' + String({children}))
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
