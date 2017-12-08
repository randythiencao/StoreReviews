package com.revature.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.revature.entities.Restaurant;
import com.revature.entities.Review;
import com.revature.entities.User;
import com.revature.utilities.SessionUtil;

public class ReviewDaoHibernate implements ReviewDao {
	private static SessionUtil su = SessionUtil.getSessionUtil();

	public List<Review> getAllReviews() {
		Session se = su.getSession();
		se.beginTransaction();
		Query query = se.createQuery("From Review");
		List<Review> reviews = query.list();
		se.getTransaction().commit();
		se.close();
		return reviews;
	}

	public Review addReview(User user, Restaurant restaurant, Review review) {
		Session se = su.getSession();
		se.beginTransaction();
		user.getReviews().add(review);
		restaurant.getReviews().add(review);
		se.update(user);
		se.update(restaurant);
		se.getTransaction().commit();
		se.close();
		return review;
	}

	// Don't need because you can just get it directly from user object, e.g., getUserById
//	@Override
//	public List<Review> getReviewsByUser(String userId) {
//		// TODO Auto-generated method stub
//		return null;
//	}
	
}
