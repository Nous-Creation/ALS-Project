import Head from "next/head";
import { Top } from "@/components/pages";
import { client } from "@/libs/client";

export interface ContributionProps {
  contribution: string
  updateDate: string
}

export default function Home({contribution, updateDate}: ContributionProps) {
  return (
    <>
      <Head>
        <title>一般社団法人中島竜基を支える会</title>
        <meta
          name="description"
          content="難病ALS（筋萎縮側索硬化症）で闘病中の中島竜基を支援する団体です。病気の進行を止め、元の生活に戻るためにご協力よろしくお願いいたします。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Top contribution={contribution} updateDate={updateDate} />
      </main>
    </>
  );
}

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
  const contribution = await client.get({ endpoint: "contribution" });

  return {
    props: {
      contribution: contribution.contribution,
      updateDate: contribution.updateDate,
    },
  };
};