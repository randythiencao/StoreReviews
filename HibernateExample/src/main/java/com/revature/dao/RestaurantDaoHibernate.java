package com.revature.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.revature.entities.Restaurant;
import com.revature.entities.Review;
import com.revature.entities.User;
import com.revature.utilities.SessionUtil;

public class RestaurantDaoHibernate implements RestaurantDao {
	private static SessionUtil su = SessionUtil.getSessionUtil();

	@Override
	public List<Restaurant> getAllRestaurants() {
		Session se = su.getSession();
		se.beginTransaction();
		Query query = se.createQuery("From Restaurant");
		List<Restaurant> restaurants = query.list();
		se.getTransaction().commit();
		se.close();
		return restaurants;
	}

	@Override
	public Restaurant getRestaurantById(int id) {
		Session se = su.getSession();
		se.beginTransaction();
		Restaurant r = (Restaurant) se.get(Restaurant.class, id);
		se.getTransaction().commit();
		se.close();
		return r;
	}

	@Override
	public Restaurant addRestaurant(Restaurant restaurant) {
		Session se = su.getSession();
		se.beginTransaction();
		se.save(restaurant);
		se.getTransaction().commit();
		se.close();
		return restaurant;
	}

	@Override
	public Restaurant addReview(Restaurant restaurant, Review review) {
		Session se = su.getSession();
		se.beginTransaction();
		Review r = new Review();
		Restaurant res = new Restaurant();
		res.getReviews().add(r);
		se.save(res);
		se.getTransaction().commit();
		se.close();
		return res;
	}

}
