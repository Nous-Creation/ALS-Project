import styled, { keyframes } from "styled-components";

export const FirstView = () => {
  return (
    <Container>
      <RightWrapper>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <FamilyImage src={"/images/family.png"} alt="" />
      </RightWrapper>

      <LeftWrapper>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <TitleImage src={"/images/firstview-title.png"} alt="" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <DescImage src={"/images/firstview-desc.png"} alt="" />
      </LeftWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  padding: 0 48px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media (max-width: 780px) {
    display: block;
    padding: 0 12px;
  }
`;

const LeftWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 50%;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const RightWrapper = styled.div`
  position: relative;
  width: 50%;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const TitleImage = styled.img`
  width: 80%;

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const DescImage = styled.img`
  width: 75%;

  @media (max-width: 1000px) {
    width: 85%;
  }
`;

const Shape = keyframes`
0%, 100% {
        border-radius: 59% 41% 21% 79% / 62% 53% 47% 38%;
    }
    50% {
        border-radius: 26% 74% 52% 48% / 52% 32% 68% 48%;
    }
`;

const FamilyImage = styled.img`
  width: 100%;
  animation: ${Shape} 10s ease 0s infinite normal;
`;
