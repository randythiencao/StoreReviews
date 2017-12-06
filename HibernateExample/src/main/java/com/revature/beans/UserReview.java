package com.revature.beans;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_reviews")
public class UserReview {
	@Id
	@Column(name="user_id")
	private int userId;
	@Column(name="review_id")
	private int reviewId;
	public UserReview() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserReview(int userId, int reviewId) {
		super();
		this.userId = userId;
		this.reviewId = reviewId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getReviewId() {
		return reviewId;
	}
	public void setReviewId(int reviewId) {
		this.reviewId = reviewId;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + reviewId;
		result = prime * result + userId;
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
		UserReview other = (UserReview) obj;
		if (reviewId != other.reviewId)
			return false;
		if (userId != other.userId)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "UserReview [userId=" + userId + ", reviewId=" + reviewId + "]";
	}
	
}
