import { styled } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { HeaderLink } from "./HeaderLink";

export const Header = () => {
  return (
    <Container>
      <Logo>一般社団法人 中島竜基を支える会</Logo>
      <HeaderRight>
        <HeaderLink href="#overview">ASL治療と寄付金について</HeaderLink>
        <HeaderLink href="#message">本人から一言</HeaderLink>

        <IconWrapper>
          <AiOutlineMenu style={{ fontSize: "26px" }} />
        </IconWrapper>
      </HeaderRight>
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px;
  @media (max-width: 780px) {
    padding: 24px 12px;
  }
`;

const Logo = styled.p`
  color: #483b34;
  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  cursor: pointer;

  @media (max-width: 780px) {
    font-size: 16px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const IconWrapper = styled.div`
  display: none;

  @media (max-width: 780px) {
    display: block;
    height: max-content;
  }
`;
