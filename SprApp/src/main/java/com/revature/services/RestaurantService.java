package com.revature.services;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.revature.dao.RestaurantDao;
import com.revature.dao.RestaurantDaoHibernate;
import com.revature.dao.ReviewDao;
import com.revature.dao.ReviewDaoHibernate;
import com.revature.entities.Restaurant;
import com.revature.entities.Review;
import com.revature.entities.User;

@Service
public class RestaurantService {

	RestaurantDao rd = new RestaurantDaoHibernate();
	ReviewDao reviewDao = new ReviewDaoHibernate();

	public Restaurant getRestaurantById(int i) {
		return rd.getRestaurantById(i);
	}

	public Review addReview(User user, Restaurant restaurant, Review review) {
		System.out.println("user: " + user.toString() + "restaurant: " + restaurant.toString() + "review: " + review.toString());
		return reviewDao.addReview(user, restaurant, review);
	}
}
