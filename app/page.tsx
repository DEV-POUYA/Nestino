import IntroductionPage from "@/components/templates/Introduction";
import Header from "@/components/templates/header";
import About from "../components/templates/About";

export default function Home() {
  return (
    <>
      <div>
        <IntroductionPage />
        <Header />
        <About />
      </div>
    </>
  );
}
