import React from "react";
import { styled } from "styled-components";

const message = ``;

export const PatientMessage = () => {
  return (
    <Container>
      <Title>本人からのメッセージ</Title>
      <Desc>
        皆さまホームページをご覧いただきありがとうございます。
        <br />
        中島竜基です。
        <br />
        <br />
        私は検査入院の末2023年5月2日に自治医科大学附属病院にて
        <br />
        ALS（筋萎縮側索硬化症）という進行性の難病と診断されました。
        <br />
        <br />
        全身の筋肉や運動神経が無くなっていく病気で
        <br />
        やがて食べることや呼吸することも出来ずに死に至る病気です。
        <br />
        <br />
        前の病院では違う病気と疑われていたので思ってもいないそんな最悪な病気を
        <br />
        急に宣告されて診断後は死に対してや
        <br />
        自分がいなくなったあとの世界のことばっかり考えていて
        <br />
        なかなか気持ちの整理がつかずしばらく家族以外誰にも言えませんでした。
        <br />
        <br />
        しかしいろいろと調べていると希望のある情報もたくさんあることに気づきました。
        <br />
        家族や仲間からの生きて治してほしいという熱い気持ちも受けて
        <br />
        自分も前向きにこの病気に挑もうと思いました。
        <br />
        <br />
        これから少しでも可能性あるものは全て試そうと思っています。
        <br />
        中でも幹細胞再生医療や培養上清液は症状が軽いうちでないと
        <br />
        効き目が弱いようで僕にはあまり時間がありません。
        <br />
        <br />
        本来なら自分たちで治療費を捻出して今すぐにでも治療に向かいたいのですが
        <br />
        悲しいことに直ぐにそこまでの大金を集めることは自分たちには不可能です。
        <br />
        <br />
        まだ小さい子ども達や妻、
        <br />
        応援してくれる仲間達の為にも
        <br />
        絶対にこの病気を治したいです。
        <br />
        <br />
        最低でも進行を食い止めて新たな完治薬を待ちたいです。
        <br />
        まだ死にたくないです。
        <br />
        <br />
        この病気を治してALSやほかの難病に苦しむ方の希望になりたいです。
        <br />
        少しでも力を貸していただければ幸いです。
        <br />
        <br />
        皆さんご協力宜しくお願い致します。
      </Desc>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  margin: 100px 0;
  padding: 0 12px;
`;

const Title = styled.h2`
  color: #000;
  font-family: Noto Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  margin-bottom: 32px;

  @media (max-width: 980px) {
    font-size: 24px;
  }
`;

const Desc = styled.p`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;

  @media (max-width: 980px) {
    width: 100%;
    font-size: 16px;
    text-align: left;
  }
`;
