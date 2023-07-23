import React from "react";
import { styled } from "styled-components";

const overview = `発症から平均3年〜5年が余命と言われています。\nしかし人工呼吸器や胃瘻を付ければ寝たきりでも命を繋ぐことは可能です。\n\n現在は保険適用内の薬を服用してますが2〜3ヶ月程度の延命が限度です。そこで私たちはALSの進行が止まるかまたは改善される可能性のある幹細胞再生医療や培養上清液などを受けたいと思っています。\n\nしかし、これらの治療は保険適用外のため1本300万円のものなど莫大な費用がかかるそうです。`;

export const MedicalOverview = () => {
  return (
    <Container>
      <Title>ALS治療について</Title>
      <Overview>{overview}</Overview>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  padding: 80px 48px;
  text-align: center;
  background: url("/images/background2.png") no-repeat bottom 10px right 10px;
`;

const Title = styled.h2`
  color: #000;
  font-family: Noto Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 40px;

  @media (max-width: 980px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`;

const Overview = styled.p`
  max-width: 850px;
  width: 100%;
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin: 0 auto;
  white-space: pre-wrap;

  @media (max-width: 980px) {
    font-size: 16px;
    width: 85%;
  }
`;
