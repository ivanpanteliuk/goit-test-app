import { useCallback, useEffect, useRef, useState } from "react";
import { Container, Section } from "../../components/App/App.styled";
import TweetCard from "../../components/TweetCard/TweetCard";
import Dropdown from "../../components/Dropdown/Dropdown";
import { GoBackBtn, List, ListItem, LoadMoreBtn } from "./Tweets.styled";
import { fetchTweets } from "../../services/tweetsApi";
import { Notify } from "notiflix";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const notifyOptions = {
  width: "450px",
  position: "right-top",
  distance: "20px",
  timeout: 2000,
  clickToClose: true,
  fontSize: "20px",
  cssAnimationStyle: "zoom",
  showOnlyTheLastOne: true,
};

Notify.init(notifyOptions);

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isVisibleButton, setIsVisibleButton] = useState(true);
  const location = useLocation();
  const backPath = useRef(location.state?.from ?? "/");
  const [filter, setFilter] = useState("show all");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const getTweets = useCallback(async (page) => {
    try {
      setIsLoading(true);
      const { data } = await fetchTweets(page);
      if (!data.length) return setIsVisibleButton(false);
      setUsers((prevUsers) => [...prevUsers, ...data]);
    } catch (error) {
      Notify.failure`${error}`;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getTweets(page);
  }, [getTweets, page]);

  useEffect(() => {
    const filterFromLS = localStorage.getItem("filter");
    console.log(filterFromLS);
    if (filterFromLS) setFilter(filterFromLS);
  }, []);

  useEffect(() => {
    const updatedFilteredUsers = users
      .map((user) => ({
        ...user,
        isFollowing: localStorage.getItem(`followings_${user.id}`)
          ? JSON.parse(localStorage.getItem(`followings_${user.id}`))
          : user.isFollowing || false,
      }))
      .filter((user) => {
        if (filter === "follow") {
          return !user.isFollowing;
        } else if (filter === "followings") {
          return user.isFollowing;
        }
        return true;
      });
    localStorage.setItem("filter", filter);
    setFilteredUsers(updatedFilteredUsers);
  }, [users, filter]);

  const onLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleChange = (evt) => {
    setFilter(evt.target.value.toLowerCase());
  };

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        <GoBackBtn to={backPath.current}>Go back</GoBackBtn>
        <Dropdown value={filter} onChange={handleChange} />
        {filteredUsers.length !== 0 && (
          <List>
            {filteredUsers.map(({ tweets, followers, avatar, id }) => (
              <ListItem key={id}>
                <TweetCard
                  tweets={tweets}
                  followers={followers}
                  avatar={avatar}
                  id={id}
                />
              </ListItem>
            ))}
          </List>
        )}
        {filteredUsers.length !== 0 && isVisibleButton && (
          <LoadMoreBtn
            type="button"
            disabled={isLoading}
            onClick={onLoadMoreClick}
          >
            {isLoading ? "Loading..." : "Load More"}
          </LoadMoreBtn>
        )}
      </Container>
    </Section>
  );
}
