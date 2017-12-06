package com.revature.dao;

import java.util.List;

import com.revature.entities.Review;

public interface ReviewDao {
	List<Review> getAllReviews();
//	List<Review> getReviewsByUser(String userId);
}
