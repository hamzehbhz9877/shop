import { FaCircle, FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import UseLikeDislike from "hooks/useLikeDislike/useLikeDislike";

type CommentType = {
  result: "کاربر" | "مدیر سایت";
  likeCount: number;
  user: string;
  dislikeCount: number;
  shippingDay: string;
  description: string;
  reply?: boolean;
};

const Question = ({
  dislikeCount,
  likeCount,
  shippingDay,
  user,
  description,
  reply = false,
  result,
}: CommentType) => {
  const {
    handleLike,
    handleDisLike,
    isLikeActive,
    isDisLikeActive,
    like,
    dislike,
  } = UseLikeDislike({
    initDislikeCount: dislikeCount,
    initLikeCount: likeCount,
  });

  return (
    <div className="card info">
      <div className="d-flex flex-wrap gap-3 align-items-center">
        <span className="info__shipping-user fw-bold font-14">{user}</span>
        <span>
          <FaCircle className="text-splitter-dot me-0" />
          <span className="color-mischka">{shippingDay}</span>
          <FaCircle className="text-splitter-dot ms-0" />
        </span>
        <span className="info__shipping-result">{result}</span>
      </div>
      <p className={`info__description ${!user && "text-overflow"}`}>
        {description}
      </p>

      <div className="border-splitter" />
      <div
        className={`info__det d-flex flex-wrap gap-3 ${
          reply ? "justify-content-end" : "justify-content-between"
        }`}
      >
        {!reply && (
          <button className="btn btn-athens-gray color-mischka">
            ثبت پاسخ
          </button>
        )}
        <div className="d-flex align-items-center">
          {user && (
            <p className="pl-16 font-13 my-0">آیا این دیدگاه مفید بود؟</p>
          )}
          <span
            role="button"
            className={`info-like ${
              isLikeActive && "info__like--active"
            } pl-10`}
            onClick={handleLike}
          >
            <FaThumbsUp /> {like}
          </span>{" "}
          <span
            role="button"
            className={`info-dislike ${
              isDisLikeActive && "info__dislike--active"
            }`}
            onClick={handleDisLike}
          >
            <FaThumbsDown /> {dislike}
          </span>
        </div>
      </div>
    </div>
  );
};
export default Question;
