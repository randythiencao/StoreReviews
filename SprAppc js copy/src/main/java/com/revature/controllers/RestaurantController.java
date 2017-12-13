package com.revature.controllers;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.Restaurant;
import com.revature.entities.Review;
import com.revature.entities.User;
import com.revature.services.RestaurantService;

@RestController
@RequestMapping("restaurants")
@CrossOrigin(allowCredentials = "true", origins = "http://localhost:4200")
public class RestaurantController {

	@Autowired
	RestaurantService rs;

	@GetMapping("get/{id}")
	public Restaurant findById(@PathVariable int id) {
		System.out.println("request to find restaurant with id:" + id);
		return rs.getRestaurantById(id);
	}
	
	// Instead of new user and new restaurant I need to get the user id from the session and get the rest id from the json
	@PostMapping("addReview")
	public Review AddReview(@RequestBody Review review) {
		System.out.println("attempting to add review: " + review.toString());
		return rs.addReview(new User(), new Restaurant(), review);
	}
	
	@GetMapping("getReviews/{restId}")
	public Set<Review> getRestaurantsReviewsByRestaurantId(@PathVariable int restId) {
		return rs.getRestaurantsReviewsByRestaurantId(restId);
	}
}
