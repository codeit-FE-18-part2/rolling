import { PrimaryButton } from "../components/button/button";
import BUTTON_SIZE from "../components/button/button-size";
import { getRollingPaperList } from "../features/rolling-paper/api/rolling-paper-list";
import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import RollingPaperList from "../features/rolling-paper/components/rolling-paper-list";
import { media } from "../utils/media";
import { useMedia } from "../hooks/use-media";

const TopContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
`;

const CardBox = styled.article`
  ${media.tablet} {
    flex: 1;
  }
`;

const CardSection = styled.section`
  justify-self: center;

  ${media.tablet} {
    width: 100%;
  }
`;

const CardTitle = styled.h2`
  text-align: left;
  font-size: 24px;
  font-weight: 700;

  ${media.tablet} {
    margin-left: 24px;
  }

  ${media.mobile} {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const ButtonFooter = styled.footer`
  position: relative;
`;

const MakingButton = styled(PrimaryButton)`
  margin-top: 64px;
  font-weight: 400;
  padding: 14px 60px;

  ${media.tablet} {
    justify-self: anchor-center;
    width: calc(100% - 48px);
    padding: 14px 20px;
    margin: 24px;
  }
`;

const cache = {};
function getCachedImage(url) {
  if (!cache[url]) {
    cache[url] = new Image();
    cache[url].src = url;
  }
  return cache[url].src;
}

function ShowMessageList() {
  const navigate = useNavigate();

  const [testData, setTestData] = useState([]);
  const [popularDataList, setPopularDataList] = useState([]);
  const [recentDataList, setRecentDataList] = useState([]);
  const [popularCurrentPage, setPopularCurrentPage] = useState(0);
  const [recentCurrentPage, setRecentCurrentPage] = useState(0);
  const [cardCount, setCardCount] = useState(4);
  const { isDesktop } = useMedia();

  useEffect(() => {
    isDesktop ? setCardCount(4) : setCardCount(null);
  }, [isDesktop]);

  const handleMakingButton = () => {
    navigate("/post");
  };

  useEffect(() => {
    isDesktop ? setCardCount(4) : setCardCount(null);
  }, [isDesktop]);


  useEffect(() => {
    getRollingPaperList().then(setTestData);
  }, []);

  useEffect(() => {
    testData.forEach((data) => {
      getCachedImage(data.imageURL);
    });
  }, [testData]);

  useEffect(() => {
    const sortedPopular = testData
      .slice()
      .sort((a, b) => b.messageCount - a.messageCount);
    setPopularDataList(sortedPopular);

    const sortedRecent = testData
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setRecentDataList(sortedRecent);
  }, [testData]);

  const totalPages = cardCount ? Math.ceil(testData.length / cardCount) : 1;

  const popularShowCards = useMemo(() => {
    if (!cardCount) return popularDataList;
    const start = popularCurrentPage * cardCount;
    return popularDataList.slice(start, start + cardCount);
  }, [popularDataList, popularCurrentPage, cardCount]);

  const recentShowCards = useMemo(() => {
    if (!cardCount) return recentDataList;
    const start = recentCurrentPage * cardCount;
    return recentDataList.slice(start, start + cardCount);
  }, [recentDataList, recentCurrentPage, cardCount]);

  const handleTurnCards = (direction, mode) => {
    const cardPageMap = {
      popular: { current: popularCurrentPage, setter: setPopularCurrentPage },
      recent: { current: recentCurrentPage, setter: setRecentCurrentPage },
    };

    const cardPageValue = cardPageMap[mode];
    const { current, setter } = cardPageValue;
    const total = totalPages;

    const additionalPageIndex = direction === "next" ? 1 : -1;
    const newPageIndex = current + additionalPageIndex;

    if (newPageIndex >= 0 && newPageIndex < total) {
      setter(newPageIndex);
    }
  };

  return (
    <TopContainer>
      <CardBox>
        <CardSection>
          <CardTitle>인기 롤링 페이퍼 🔥</CardTitle>
          <RollingPaperList
            cardData={popularShowCards}
            totalPages={totalPages}
            currentPage={popularCurrentPage}
            onTurnCards={(direction) => handleTurnCards(direction, "popular")}
          />
        </CardSection>

        <CardSection>
          <CardTitle>최근에 만든 롤링 페이퍼 ⭐</CardTitle>
          <RollingPaperList
            cardData={recentShowCards}
            totalPages={totalPages}
            currentPage={recentCurrentPage}
            onTurnCards={(direction) => handleTurnCards(direction, "recent")}
          />
        </CardSection>
      </CardBox>
      <ButtonFooter>
        <MakingButton
          size={BUTTON_SIZE.large}
          title="나도 만들어보기"
          onClick={handleMakingButton}
        />
      </ButtonFooter>
    </TopContainer>
  );
}

export default ShowMessageList;
