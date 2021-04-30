import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <div class="container">
          <Link href="/about">
            <a>KArthick Check</a>
          </Link>
        </div>
      </section>
      <Footer/>
    </main>
  );
}

export default Index;
