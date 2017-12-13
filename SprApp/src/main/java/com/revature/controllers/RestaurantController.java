package com.revature.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.Restaurant;
import com.revature.entities.Review;
import com.revature.services.RestaurantService;
import com.revature.services.UserService;

@RestController
@RequestMapping("restaurants")
@CrossOrigin(allowCredentials = "true", origins = "http://localhost:4200")
public class RestaurantController {

	@Autowired
	RestaurantService rs;
	
	@Autowired
	UserService us;

	@GetMapping("get/{id}")
	public Restaurant findById(@PathVariable int id) {
		System.out.println("request to find restaurant with id:" + id);
		return rs.getRestaurantById(id);
	}
	
	// Instead of new user and new restaurant I need to get the user id from the session and get the rest id from the json
    @PostMapping("addReview/{restId}/{userId}")
    public Review AddReview(@RequestBody Review review, @PathVariable int userId, @PathVariable int restId) {
        System.out.println("attempting to add review: " + review.toString());
        return rs.addReview(us.getUserById(userId), rs.getRestaurantById(restId), review);
    }
	
	@GetMapping("all")
	public List<Restaurant> getAllRestaurants()
	{
		return rs.getAll();
	}
	@GetMapping("getReviews/{restId}")
	public ResponseEntity<?> getRestaurantsReviewsByRestaurantId(@PathVariable int restId) {
		System.err.println("in getreviews/restid");
		return new ResponseEntity<>(rs.getRestaurantsReviewsByRestaurantId(restId), HttpStatus.OK);
	}
}
