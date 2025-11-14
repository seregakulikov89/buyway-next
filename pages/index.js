import Head from "next/head";
import Buyway from "../components/Buyway";

export default function Home() {
  return (
    <>
      <Head>
        <title>Buy Way — Способ покупки с заботой и надёжностью</title>
        <meta
          name="description"
          content="Безопасный выкуп товаров из Европы под ключ. Доставка из Германии: фото/видео-отчёт, бережная упаковка и прозрачная оплата по этапам."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Buyway />
    </>
  );
}
