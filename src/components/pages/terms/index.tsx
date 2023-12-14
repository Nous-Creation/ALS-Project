import { Header } from "@/components/base";
import React from "react";
import { styled } from "styled-components";

export const TermsPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <H1>特定商取引法に基づく表記</H1>

        <ContentWrapper>
          <H2>自業社の名称</H2>
          <Text>一般社団法人中島竜基を支える会</Text>

          <H2>運営統括責任者</H2>
          <Text>中村悟</Text>

          <H2>所在地</H2>
          <Text>〒300-4117 茨城県土浦市高岡2109-9</Text>

          <H2>電話番号</H2>
          <Text>090-7707-9496</Text>

          <H2>メールアドレス</H2>
          <Text>cordial0419@gmail.com</Text>

          <H2>追加手数料等の追加料金</H2>
          <Text>特になし</Text>

          <H2>寄付のキャンセル・返金ポリシー</H2>
          <List>
            <ListItem>
              ①
              寄付は一度行われるとキャンセルできません。寄付後の変更や返金はできません。ただし、誤った金額で寄付された場合や、技術的なエラーにより寄付が重複してしまった場合には、ご連絡いただければ対応いたします。
            </ListItem>
            <ListItem>
              ② 寄付のキャンセルは、寄付日から72時間以内に限り受け付けます。
            </ListItem>
          </List>

          <H2>寄付のキャンセル・返金ポリシー</H2>
          <List>
            <ListItem>
              ①
              寄付は即時に受け付け、処理されます。特別な引渡し時期は設定されていません。寄付金額が確認された後、それは直ちにプロジェクトまたは団体の運営資金として活用され、寄付者からの支援に感謝申し上げます。
            </ListItem>
            <ListItem>
              ②
              何か疑問点や引渡しに関する特別な要求がある場合は、弊社までお問い合わせいただければと思います。寄付者の皆様には、寄付いただいたことに対する深い感謝を申し上げます。
            </ListItem>
            <ListItem>
              ③
              寄付金額に関する確認および処理に関しては、適切な措置が取られ、通常数営業日以内に完了します。また、寄付者には必要に応じて領収書が発行され、寄付の証明が提供されます。
            </ListItem>
          </List>

          <H2>受け付け可能な決済手段</H2>
          <Text>指定口座への銀行振込 / クレジット決済</Text>

          <H2>決済期間</H2>
          <Text>
            銀行振込・クレジットカード決済のどちらもただちに処理されます。
          </Text>

          <H2>寄付の金額</H2>
          <Text>5000円 / 10000円 / 50000円 / 100000円 </Text>
        </ContentWrapper>
      </Container>
    </div>
  );
};

const Container = styled.div`
  max-width: 780px;
  width: 100%;
  margin: 48px auto;
`;

const H1 = styled.h1`
  margin-bottom: 24px;
`;

const ContentWrapper = styled.div`
  margin-bottom: 24px;
`;

const H2 = styled.h2`
  margin-bottom: 12px;
  color: #483b34;
`;

const List = styled.ul`
  margin-bottom: 12px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #000;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Text = styled.p`
  margin-bottom: 12px;
  color: #000;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
