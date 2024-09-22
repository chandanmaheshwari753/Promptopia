import Feed from "@components/Feed";
import { connectToDB } from "@utils/database";

await connectToDB();

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      {/* <br className="max-md:hidden" /> */}
    </h1>
    <span className="head_text orange_gradient text-center">
      AI-Powered Prompts
    </span>
    <p className="desc text-center">
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;
