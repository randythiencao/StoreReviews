package com.revature.launcher;

import org.hibernate.Session;


import com.revature.entities.Review;
import com.revature.dao.RestaurantDao;
import com.revature.dao.RestaurantDaoHibernate;
import com.revature.dao.ReviewDao;
import com.revature.dao.ReviewDaoHibernate;
import com.revature.dao.UserDao;
import com.revature.dao.UserDaoHibernate;
import com.revature.entities.Restaurant;
import com.revature.entities.User;
import com.revature.utilities.SessionUtil;

public class YelpLauncher {

	private static SessionUtil su = SessionUtil.getSessionUtil();

	public static void main(String[] args) {
		UserDao ud = new UserDaoHibernate();
		ReviewDao rd = new ReviewDaoHibernate();
		RestaurantDao resd = new RestaurantDaoHibernate();
		// User DAO methods
//		System.out.println(ud.getAllUsers().toString()); // takes a while
//		System.out.println(ud.getUserById(9));
//		User u = new User(100, null, null, null, null, null, 0, null);
//		System.out.println(ud.addUser(u).toString());
//		ud.addUserReview(ud.getUserById(9), new Review()); // checked in db: it does add a review to review table
		System.out.println(ud.findByUsername("USER1").toString());
		// Review DAO methods
//		System.out.println(rd.getAllReviews().toString());
	
		// Restaurant DAO Methods
//		System.out.println("getting all restaurants: ");
//		System.out.println(resd.getAllRestaurants().toString()); // takes a while
//		System.out.println("getting restaurant with id 21");
//		System.out.println(resd.getRestaurantById(21));
//		System.out.println("Adding restaurant...");
//		Restaurant r = new Restaurant(0, null, null, null, null, 0, null, null);
//		System.out.println(resd.addRestaurant(r).toString());
//		System.out.println("Adding Review");
//		resd.addReview(resd.getRestaurantById(9), new Review()); // checked in db: it does add a review to review table
	}
}
