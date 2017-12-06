package com.revature.beans;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="restaurant_reviews")
public class RestaurantReview {
 private static final long serialVersionUID = 1L;
  
 @Id
 @Column(name="rest_id")
 private int restId;
 @Column(name="review_id")
 private int reviewId;
public RestaurantReview() {
	super();
	// TODO Auto-generated constructor stub
}
public RestaurantReview(int restId, int reviewId) {
	super();
	this.restId = restId;
	this.reviewId = reviewId;
}
public int getRestId() {
	return restId;
}
public void setRestId(int restId) {
	this.restId = restId;
}
public int getReviewId() {
	return reviewId;
}
public void setReviewId(int reviewId) {
	this.reviewId = reviewId;
}
public static long getSerialversionuid() {
	return serialVersionUID;
}
@Override
public int hashCode() {
	final int prime = 31;
	int result = 1;
	result = prime * result + restId;
	result = prime * result + reviewId;
	return result;
}
@Override
public boolean equals(Object obj) {
	if (this == obj)
		return true;
	if (obj == null)
		return false;
	if (getClass() != obj.getClass())
		return false;
	RestaurantReview other = (RestaurantReview) obj;
	if (restId != other.restId)
		return false;
	if (reviewId != other.reviewId)
		return false;
	return true;
}
@Override
public String toString() {
	return "RestaurantReview [restId=" + restId + ", reviewId=" + reviewId + "]";
}
 
 

 
}
