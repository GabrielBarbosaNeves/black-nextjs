import Head from "next/head";
import Header from "./src/components/Header";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <h1>Carrinho</h1>
    </>
  );
}
