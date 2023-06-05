import { Section } from "../../components/App/App.styled";
import { HeroContainer, HeroSubText, HeroText, SubText } from "./Home.styled";

export default function Home() {
  return (
    <Section>
      <HeroContainer>
        <HeroText>Tweets: Your Social Media Hub</HeroText>
        <HeroSubText>
          Welcome to Tweets, a social media platform where you can stay
          connected with your favorite influencers and stay updated with their
          tweets. Follow your favorite influencers, interact with their content,
          and engage with a vibrant community of users.
        </HeroSubText>
        <SubText>
          Discover, Connect, and Stay Updated!
          <br /> Tweets is a vibrant social media platform where you can keep up
          with your favorite influencers, stay informed about their latest
          thoughts and ideas, and engage with a community of like-minded
          individuals. With a user-friendly interface and a wide range of
          features, Tweets makes it easy to explore and follow the influencers
          that matter to you. Stay connected, get inspired, and join the
          conversation at Tweets. Start exploring now!
        </SubText>
      </HeroContainer>
    </Section>
  );
}
