import styled from "styled-components";

export const Header = () => {
  return (
    <Container>
      <Logo>一般社団法人中島竜基を支える会</Logo>
      <HeaderRight>
        <HeaderLink href="#overview">ASL治療と寄付金について</HeaderLink>
        <HeaderLink href="#message">本人から一言</HeaderLink>
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
    width: max-content;
    margin: 0 auto;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const HeaderLink = styled.a`
  color: #483b34;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  display: block;
  cursor: pointer;

  @media (max-width: 780px) {
    display: none;
  }
`;
