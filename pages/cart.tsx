import Head from "next/head";
import Header from "./src/components/Header";
import { Container } from "reactstrap";
import CartTable from "./src/components/CartTable";
import CartTotal from "./src/components/CartTotal";

export default function Cart() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Container className="mb-5">
          <h1 className="my-5">Carrinho</h1>

          <CartTable />
          <CartTotal />
        </Container>
      </main>
    </>
  );
}
