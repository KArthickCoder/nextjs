import { Component } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <main>
        <Header />
        <div class="container">
          <section>
            <p>
              This is another page of the SSR example, you accessed it{" "}
              <strong>{this.props.isServer ? "server" : "client"} side</strong>.
            {"check karthick"}
            </p>
            <p>
              You can reload to see how the page change.
          </p>
            <Link href="/">
              <a>Go to Home</a>
            </Link>
          </section>
        </div>
      <Footer/>
      </main>
    );
  }
}

export default AboutPage;