// import Head from "next/head";
// import styles from "../styles/Home.module.css";
// import { Form } from "../components/Form";
// import { Input, InputWithDiv } from "../components/Input";

// export default function Home() {
//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <Form onSubmit={onSubmit}>
//         <Input name="firstName" />
//         <Input name="lastName" />
//         {/* <InputWithDiv name="username" /> */}

//         <Input type="submit" value="Submit" />
//       </Form>
//     </div>
//   );
// }

import React from "react";
import ReactDOM from "react-dom";
import { Form, Input, Select } from "../components";

export default function App() {
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <h1>Smart Form Component</h1>
      <Form onSubmit={onSubmit}>
        <Input name="firstName" />
        <Input name="lastName" />
        <Select name="sex" options={["female", "male"]} />

        <button>Submit</button>
      </Form>
    </>
  );
}

