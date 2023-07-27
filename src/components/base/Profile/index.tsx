import { Button } from "@/components/ui";
import styled from "styled-components";

const profileMessage = `出身地 茨城県筑西市\n1995年生まれ 中島建築有限会社 大工\n 妻と子供3人の5人家族\n\n2022年夏頃から右手親指に脱力感\n2023年5月2日 27歳の時にALSと確定診断\n現在の症状は右手から右肩、左手から左肩までの筋萎縮と全身のあらゆる筋肉で痙攣が起きています。`;

export const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <ProfileImage src="/images/tatsuki.png" />
        </LeftWrapper>
        <RightWrapper>
          <Name>中島竜基</Name>
          <EnName>TATSUKI NAKAJIKA</EnName>
          <ProfileMessage>{profileMessage}</ProfileMessage>
        </RightWrapper>
      </Wrapper>
      <Button text="寄付をする" isEmail={false} />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  margin: 80px 0;
  padding: 0 48px;
  text-align: center;

  @media (max-width: 780px) {
    padding: 0 12px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 48px;
  gap: 12px;

  @media (max-width: 780px) {
    display: block;
  }
`;

const LeftWrapper = styled.div`
  width: 50%;
  background: url("/images/background1.png") no-repeat;
  background-position: center;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const ProfileImage = styled.img`
  width: 40%;
  margin: 0 auto;
  display: block;
`;

const RightWrapper = styled.div`
  width: 50%;
  text-align: left;

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const Name = styled.p`
  color: #000;
  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;

  @media (max-width: 980px) {
    font-size: 16px;
  }
`;

const EnName = styled.p`
  color: #000;
  font-family: Noto Sans;
  font-size: 8px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 32px;
`;

const ProfileMessage = styled.p`
  color: #000;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: pre-wrap;
  width: 90%;

  @media (max-width: 980px) {
    width: 100%;
    font-size: 16px;
  }
`;
