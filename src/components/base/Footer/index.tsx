import { Button } from "@/components/ui";
import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Container>
      <Title>一般社団法人中島竜基を支える会</Title>
      <Desc>
        活動の主催は非営利団体として、４名の理事代表中村悟・野手都希也・中島尚椰・工藤ケビンによって組織化した一般社団法人「中島竜基を支える会」が運営しています。集まった募金は一旦、金融機関にて管理されます。その募金の使用用途に関しては、本社団法人内での理事会にて決定し、監事の確認を経た上で適切に管理して参ります。
      </Desc>

      <Button text="お問い合わせ" isEmail={true} />
      <AllRights>© 中島竜基 ALS治療の支援募金. All Rights Reserved.</AllRights>
    </Container>
  );
};

const Container = styled.footer`
  margin: 32px auto;
  text-align: center;
  padding: 0 12px;
`;

const Title = styled.p`
  color: #483b34;
  font-family: Noto Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-bottom: 32px;

  @media (max-width: 780px) {
    margin-bottom: 24px;
  }
`;

const Desc = styled.p`
  color: #000;
  text-align: center;
  font-family: Noto Sans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 700px;
  width: 100%;
  margin: 0 auto 24px;
`;

const AllRights = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 48px;
`;
