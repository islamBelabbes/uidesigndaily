import { cn } from "../../util/util";
import useAnimatedNumber from "../../hooks/use-animated-number";
import { useMemo } from "react";

const REVIEWS = Array.from({ length: 50 }, () => ({
  rating: Math.floor(Math.random() * 5) + 1, // Random rating between 1 and 5
  comment: "I love this product",
}));

type TReviewItem = {
  count: number;
  percent: number;
  rating: number;
};

function Reviews() {
  return (
    <div className="p-[84px] shadow-[0px_12px_92px_0px_rgba(25,27,74,0.1)] font-poppins flex font-black text-[#191B4A] gap-14 flex-col bg-[#F8F8F8] rounded-[1.438rem]">
      <Header />
      <SearchBar />
      <ReviewsList />

      <button className="px-6 py-4 rounded-[2.125rem] font-semibold bg-[#191B4A] text-white w-fit">
        Write a review
      </button>
    </div>
  );
}

const Header = () => {
  return (
    <div className="flex items-center gap-20">
      <h1 className=" text-4xl w-[293px] font-merriweather">
        What others think about the product
      </h1>

      <div className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl shadow-[0px_7px_20px_0px_rgba(115,116,156,0.08)]">
        <div className="flex items-center justify-center gap-2">
          <Star />
          <span className="text-2xl font-semibold">4.8</span>
        </div>
        <span className="w-[128px] font-medium text-sm text-center">
          Average customer rating
        </span>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <label className="relative flex items-center p-4 bg-white rounded-3xl gap-[0.625rem]">
      <Search />
      <input
        placeholder="Search topics and reviews"
        className="w-full  placeholder:font-semibold placeholder: placeholder:text-[#73749C] bg-transparent outline-none font-semibold "
      />
    </label>
  );
};

const ReviewsList = () => {
  // Step 1: Use useMemo to calculate the counts and percentages for each rating
  const ratingsSummary = useMemo(() => {
    // Step 1: Initialize the ratings map
    const ratingsMap: { [key: number]: number } = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    // Step 2: Count how many each rating has
    REVIEWS.forEach(({ rating }) => {
      ratingsMap[rating]++;
    });

    // Step 3: Calculate percentage for each rating
    const totalReviews = REVIEWS.length;
    const ratingsWithPercent = Object.keys(ratingsMap).map(
      (rating: unknown) => ({
        rating: Number(rating),
        count: ratingsMap[rating as number],
        percent: +((ratingsMap[rating as number] / totalReviews) * 100).toFixed(
          0
        ),
      })
    );

    return ratingsWithPercent;
  }, []);

  return (
    <div>
      <span className="block mb-4 font-semibold">Reviews</span>
      <ul className="flex flex-col gap-[1.125rem]">
        {ratingsSummary.map(({ rating, count, percent }, i) => (
          <ReviewItem
            key={rating}
            count={count}
            percent={percent}
            rating={i + 1}
          />
        ))}
      </ul>
    </div>
  );
};

const ReviewItem = ({ count, percent, rating }: TReviewItem) => {
  if (percent > 100) throw new Error("percent must be less or equal 100");
  if (!Number.isInteger(count)) throw new Error("count must be integer");

  const animatedCount = useAnimatedNumber({ from: 0, to: count });
  const animatedProgress = useAnimatedNumber({ from: 1, to: percent });

  return (
    <li className="flex items-center gap-2 ">
      <div className="flex items-center gap-1">
        <span className="font-bold">{rating}</span>
        <Star className="size-[1.563rem]" />
      </div>

      <div className="relative grow">
        <div className="bg-[#EEEEEE] rounded-xl h-[0.625rem] outline-1 outline-[#C9C9C9] outline" />
        {percent > 0 && (
          <div
            className="bg-[#FFD66C] h-[0.625rem] rounded-xl outline-1 outline-[#EFB153] outline inset-0 absolute prog"
            style={{ width: `${animatedProgress}%` }}
          />
        )}
      </div>

      <span className="w-10 font-medium">{animatedCount}</span>
    </li>
  );
};

// SVG
const Star = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 43 40"
      className={cn("size-[46px]", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.1363 1.42392C21.2826 1.11848 21.7174 1.11848 21.8637 1.42392L27.2274 12.6267C27.4958 13.1871 28.0288 13.5743 28.6447 13.6564L40.9566 15.2958C41.2923 15.3405 41.4267 15.754 41.1814 15.9875L32.1845 24.5506C31.7344 24.979 31.5308 25.6056 31.6431 26.2167L33.8885 38.4326C33.9497 38.7657 33.5979 39.0213 33.3001 38.8602L22.3759 32.9497C21.8294 32.654 21.1706 32.654 20.6241 32.9497L9.6999 38.8602C9.40205 39.0213 9.05025 38.7657 9.11147 38.4326L11.3569 26.2167C11.4692 25.6056 11.2656 24.979 10.8155 24.5506L1.81861 15.9875C1.57331 15.754 1.70768 15.3405 2.04336 15.2958L14.3553 13.6564C14.9712 13.5743 15.5042 13.1871 15.7726 12.6267L21.1363 1.42392Z"
        fill="#FFD66C"
        stroke="#EFB153"
        strokeWidth="1.4375"
      />
    </svg>
  );
};
const Search = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-7", className)}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2_31)">
        <path
          d="M11.6667 19.8333C16.177 19.8333 19.8333 16.177 19.8333 11.6667C19.8333 7.15634 16.177 3.5 11.6667 3.5C7.15634 3.5 3.5 7.15634 3.5 11.6667C3.5 16.177 7.15634 19.8333 11.6667 19.8333Z"
          stroke="#73749C"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24.5 24.5L17.5 17.5"
          stroke="#73749C"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2_31">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Reviews;
