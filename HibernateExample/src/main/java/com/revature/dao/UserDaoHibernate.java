package com.revature.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;

import com.revature.entities.Review;
import com.revature.entities.User;
import com.revature.utilities.SessionUtil;

public class UserDaoHibernate implements UserDao {
	private static SessionUtil su = SessionUtil.getSessionUtil();
	
	@Override
	public List<User> getAllUsers() {
		Session se = su.getSession();
		se.beginTransaction();
		Query query = se.createQuery("From User");
		List<User> users = query.list();
		se.getTransaction().commit();
		se.close();
		return users;
	}

	@Override
	public User getUserById(int id) {
		Session se = su.getSession();
		se.beginTransaction();
		User u = (User) se.get(User.class, id);
		se.getTransaction().commit();
		se.close();
		return u;
	}

	@Override
	public User addUser(User u) {
		Session se = su.getSession();
		se.beginTransaction();
		se.save(u);
		se.getTransaction().commit();
		se.close();
		return u;
	}

	@Override
	public User addUserReview(User user, Review review) {
		Session se = su.getSession();
		se.beginTransaction();
		user.getReviews().add(review);
		se.save(user);
		se.getTransaction().commit();
		se.close();
		return user;
	}
	
	@Override
	public User findByUsername(String username) {
		Session se = su.getSession();
		se.beginTransaction();
		Query query = se.createQuery("From User where username=:username");
		query.setParameter("username", username);
		User u = (User) query.list().get(0);
		se.getTransaction().commit();
		se.close();
		return u;
	}

}
