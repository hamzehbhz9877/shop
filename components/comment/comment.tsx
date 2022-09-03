import {FaCircle, FaEllipsisH, FaEllipsisV, FaStar, FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import UseLikeDislike from "hooks/useLikeDislike/useLikeDislike";

type CommentType = {
    result: "خریدار" | "کاربر"|"تایید شده" | "در انتظار تایید" | "رد شده"
    likeCount: number
    user?:string
    dislikeCount: number
    shippingDay: string
    starCount?: number
    description: string
}

const Comment = ({result, dislikeCount, likeCount, shippingDay, starCount,user, description}: CommentType) => {
let commentRateColor="";

    const {handleLike, handleDisLike,isLikeActive,isDisLikeActive,like,dislike} = UseLikeDislike({initDislikeCount:dislikeCount,
        initLikeCount:likeCount})

    if (starCount)
        commentRateColor=starCount<=2?"info__star--low"
        :starCount>=2.1 && starCount<=3?"info__star--med":starCount>3?"info__star--high":""

    return (
        <div className="card info">
            <div className="d-flex flex-wrap justify-content-between gap-2 align-items-center">
                <div>
                    {starCount && starCount>0 && <span className={`info__star ${commentRateColor}`}>
                    <FaStar className="ms-2"/>{starCount}</span>}
                    <span>{user && <span className="info__shipping-user fw-bold font-14 pr-15">{user}</span>}
                  <FaCircle className={`text-splitter-dot ${starCount ? "" : "me-0"}`}/>
                   <span className="info__shipping-day color-mischka">{shippingDay}</span>
                <FaCircle className="text-splitter-dot"/>
                </span>
                    <span className="info__shipping-result">{result}</span>
                    {user &&  <FaEllipsisV role="button" className="color-mischka me-3"/>}
                </div>

                {user &&  <div className="font-14 color color-dodger-blue opacity-90">
                    <FaThumbsUp className="ms-2"/>
                    خرید این محصول را پیشنهاد میکنم
                </div>}

            </div>
            <p className={`info__description ${!user && "text-overflow"}`}>{description}</p>
            <div className="border-splitter"/>
            <div className="info__info d-flex align-items-center justify-content-between">
                <div className="d-flex flex-wrap">
                    <span>رنگ : سبز</span>
                    <span className="line-splitter"/>
                    <span>سایز : M </span>
                </div>
                <div className="d-flex align-items-center">
                    {user && <p className="pl-16 font-13 my-0">آیا این دیدگاه مفید بود؟</p>}
                    <span role="button" className={`info-like ${isLikeActive &&
                    "info__like--active"
                    } pl-10`} onClick={handleLike}><FaThumbsUp/>{" "}{like}</span>
                    {" "}
                    <span role="button" className={`info-dislike ${isDisLikeActive &&
                    "info__dislike--active"
                    }`} onClick={handleDisLike}><FaThumbsDown/>{" "}{dislike}</span>
                </div>
            </div>
        </div>
    );
};

export default Comment;