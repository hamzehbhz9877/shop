import React, { useState } from "react";

type likeDislikeType = {
  initLikeCount: number;
  initDislikeCount: number;
};
const UseLikeDislike = ({
  initLikeCount,
  initDislikeCount,
}: likeDislikeType) => {
  const [like, setLike] = useState(initLikeCount);
  const [dislike, setDisLike] = useState(initDislikeCount);
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [isDisLikeActive, setIsDisLikeActive] = useState(false);

  const handleLike = () => {
    if (initLikeCount >= 0) {
      setIsLikeActive(!isLikeActive);
      setLike(like + 1);
      if (isDisLikeActive) {
        setDisLike(dislike + 1);
        setIsDisLikeActive(false);
      }
      if (like !== initLikeCount) {
        setLike(like - 1);
      }
    }
  };

  const handleDisLike = () => {
    if (initDislikeCount > 0) {
      setIsDisLikeActive(!isDisLikeActive);
      setDisLike(dislike - 1);
      if (isLikeActive) {
        setLike(like - 1);
        setIsLikeActive(false);
      }
      if (dislike !== initDislikeCount) {
        setDisLike(dislike + 1);
      }
    }
  };

  return {
    like,
    dislike,
    isDisLikeActive,
    isLikeActive,
    handleDisLike,
    handleLike,
  };
};

export default UseLikeDislike;
