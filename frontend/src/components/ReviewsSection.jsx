import { useEffect, useState } from "react";

import API from "../services/api";

import ReviewCard from "./ReviewCard";

function ReviewsSection() {

  const [reviews, setReviews] =
    useState([]);

  useEffect(() => {

    fetchReviews();

  }, []);

  const fetchReviews = async () => {

    try {

      const response =
        await API.get("/reviews");

      setReviews(response.data);

    }

    catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {

        reviews.map((review) => (

          <ReviewCard
            key={review.id}
            review={review}
          />

        ))

      }

    </div>

  );

}

export default ReviewsSection;