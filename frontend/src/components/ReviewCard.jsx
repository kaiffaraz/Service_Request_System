import { FaStar } from "react-icons/fa";

function ReviewCard({ review }) {

  return (

    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 shadow-xl">

      <h3 className="text-xl font-bold text-white mb-2">
        {review.name}
      </h3>

      <p className="text-gray-300 mb-4">
        {review.review}
      </p>

      <div className="flex items-center gap-1">

        {

          [...Array(review.rating)].map((_, index) => (

            <FaStar
              key={index}
              className="text-yellow-400"
            />

          ))

        }

      </div>

    </div>

  );

}

export default ReviewCard;