import { useEffect, useState } from "react";
import { formatNumber } from "../../helpers/helpers";
import {
  Avatar,
  AvatarContainer,
  BgWrapper,
  Button,
  CardContainer,
  CardText,
} from "./TweetCard.styles";

export default function TweetCard({ tweets, followers, avatar, id }) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(() => {
    const storedFollowerCounts = localStorage.getItem(`followerCounts_${id}`);
    return storedFollowerCounts ? JSON.parse(storedFollowerCounts) : followers;
  });

  useEffect(() => {
    const storedFollowings = localStorage.getItem(`followings_${id}`);
    setIsFollowing(storedFollowings ? JSON.parse(storedFollowings) : false);
  }, [id]);

  const onFollowClick = () => {
    if (isFollowing) {
      setFollowerCount((prevCount) => {
        const updatedCount = prevCount - 1;
        localStorage.setItem(
          `followerCounts_${id}`,
          JSON.stringify(updatedCount)
        );
        return updatedCount;
      });
    } else {
      setFollowerCount((prevCount) => {
        const updatedCount = prevCount + 1;
        localStorage.setItem(
          `followerCounts_${id}`,
          JSON.stringify(updatedCount)
        );
        return updatedCount;
      });
    }

    setIsFollowing((prevFollowing) => {
      const updatedFollowing = !prevFollowing;
      localStorage.setItem(
        `followings_${id}`,
        JSON.stringify(updatedFollowing)
      );
      return updatedFollowing;
    });
  };

  return (
    <CardContainer role="card-container">
      <BgWrapper role="card-background" />
      <AvatarContainer>
        <Avatar src={avatar} alt="avatar" width="66" />
      </AvatarContainer>
      <CardText>{formatNumber(tweets)} Tweets</CardText>
      <CardText>
        {formatNumber(followerCount)} {isFollowing ? "Followers" : "Following"}
      </CardText>
      <Button
        type="button"
        bgColor={isFollowing ? "#5CD3A8" : "#ebd8ff"}
        hoverColor={isFollowing ? "#fff" : "#000"}
        onClick={onFollowClick}
      >
        {isFollowing ? "Following" : "Follow"}
      </Button>
    </CardContainer>
  );
}
