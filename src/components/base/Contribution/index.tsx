import { ContributionProps } from '@/pages'
import React from 'react'
import { styled } from 'styled-components';

export const Contribution = ({ contribution, updateDate } : ContributionProps) => {
const date = new Date(updateDate);

const formattedDate = `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, '0')}月${String(date.getDate()).padStart(2, '0')}日`;

  return (
    <Container>
        <Title>{formattedDate}<Br/>時点での募金額</Title>
        <ContributionWrapper>
            <ContributionPrice>{contribution}</ContributionPrice>
            <PriceUnit>円</PriceUnit>
        </ContributionWrapper>
    </Container>
  )
}

const Container = styled.div`
    margin: 100px auto;
    padding: 0 48px;
`

const Title = styled.h2`
  color: #000;
  font-family: Noto Sans;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
  text-align: center;

  @media (max-width: 980px) {
    font-size: 28px;
  }

  @media (max-width: 780px) {
    text-align: center;
  }
`;

const Br = styled.br`
    display: none;
    @media (max-width: 780px) {
    display: block;
  }
`

const ContributionWrapper = styled.div`
    display: flex;
    align-items: end;
    width: max-content;
    margin: 0 auto;
`

const ContributionPrice = styled.p`
  color: #e58c6c;
  font-family: Noto Sans;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
  margin-right: 8px;

  @media (max-width: 980px) {
    font-size: 48px;
  }

  @media (max-width: 780px) {
    text-align: center;
  }
`;

const PriceUnit = styled.p`
  color: #000;
  font-family: Noto Sans;
  font-size: 20px;
  font-style: normal;

  @media (max-width: 980px) {
    font-size: 16px;
  }

  @media (max-width: 780px) {
    text-align: center;
  }
`;