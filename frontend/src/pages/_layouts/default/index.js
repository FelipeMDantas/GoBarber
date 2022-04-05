import { Wrapper } from "./styles";
import PropTypes from "prop-types";

export default function DefaultLayout({ children }) {
  console.tron.log('default/index')
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
