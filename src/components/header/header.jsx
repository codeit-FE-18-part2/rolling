import { Link } from "react-router";
import styled from "styled-components";
import logoImage from "../../assets/logo.svg";
import { media } from "../../utils/media";

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #ededed;
  padding: 0 24px;

  ${media.mobile} {
    padding: 0 16px;
  }
`;

function Header({ className, children }) {
  return (
    <StyledHeader className={className}>
      <HeaderContent>
        <Link to="/">
          <img src={logoImage} alt="로고" />
        </Link>
        <div>{children}</div>
      </HeaderContent>
    </StyledHeader>
  );
}

export default Header;
