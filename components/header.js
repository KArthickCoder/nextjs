import Head from "next/head";
function Header() {
  return (
    <header>
      <h1>Next.js Example on Now 2.0</h1>
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" crossorigin="anonymous"/>
      </Head>
    </header>
  );
}

export default Header;
