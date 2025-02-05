import dynamic from "next/dynamic";
import Head from "next/head";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import WhyVIGLO from "./components/WhyVIGLO";
import Footer from "./components/Footer";

const DynamicLiveDashboard = dynamic(() => import("./components/LiveDashboard"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const DynamicJoinRevolution = dynamic(() => import("./components/JoinRevolution"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>VIGLO - AI-Powered Insights</title>
        <meta name="description" content="VIGLO brings AI-powered insights to the world of finance and trading." />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXX-X"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-XXXXX-X');
          `}
        </script>
      </Head>
      <main className="bg-gray-900 text-white overflow-x-hidden sm:p-4 md:p-6" role="main">
        <Hero />
        <nav aria-label="Main Navigation">
          <section id="how-it-works">
            <HowItWorks />
          </section>
          <section id="features">
            <Features />
          </section>
          <section id="use-cases">
            <UseCases />
          </section>
          <section id="why-viglo">
            <WhyVIGLO />
          </section>
          <section id="live-dashboard">
            <DynamicLiveDashboard />
          </section>
          <section id="join">
            <DynamicJoinRevolution />
          </section>
        </nav>
        <Footer />
      </main>
    </>
  );
}
