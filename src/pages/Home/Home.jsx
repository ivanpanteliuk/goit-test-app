import { Section } from "../../components/App/App.styled";
import { HeroContainer, HeroSubText, HeroText } from "./Home.styled";

export default function Home() {
  return (
    <Section>
      <HeroContainer>
        <HeroText>Tweets</HeroText>
        <HeroSubText>
          Welcome to Tweets, a social media platform where you can stay
          connected with your favorite influencers and stay updated with their
          tweets. Follow your favorite influencers, interact with their content,
          and engage with a vibrant community of users.
        </HeroSubText>
      </HeroContainer>
    </Section>
  );
}
