import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Form } from "../components/Form";
import { Input } from "../components/Input";

export default function Home() {
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Form onSubmit={onSubmit}>
        <Input name="firstName" />
        <Input name="lastName" />

        <Input type="submit" value="Submit" />
      </Form>
    </div>
  );
}
