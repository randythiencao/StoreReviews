package com.revature.dao;

import java.util.List;

import com.revature.entities.Review;
import com.revature.entities.User;

public interface UserDao {
	List<User> getAllUsers();
	User getUserById(int userId);
	User addUser(User u);
	User addUserReview (User user, Review review);
	User findByUsername(String Username);
}
