import Head from "next/head";
import { Top } from "@/components/pages";

export default function Home() {
  return (
    <>
      <Head>
        <title>一般社団法人 中島竜基を支える会</title>
        <meta
          name="description"
          content="難病ALS（筋萎縮側索硬化症）で闘病中の中島竜基を支援する団体です。病気の進行を止め、元の生活に戻るためにご協力よろしくお願いいたします。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Top />
      </main>
    </>
  );
}
