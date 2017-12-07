package com.revature.launcher;

import org.hibernate.Query;
import org.hibernate.Session;

import com.revature.beans.Certification;
import com.revature.beans.RestaurantReview;
import com.revature.beans.Student;
import com.revature.beans.UserReview;
import com.revature.entities.Review;
import com.revature.entities.Restaurant;
import com.revature.entities.User;
import com.revature.entities.UserRole;
import com.revature.utilities.SessionUtil;

public class HibernateLauncher {
    private static SessionUtil su = SessionUtil.getSessionUtil();

	public static void main(String[] args) {
		Session se = su.getSession();
		se.beginTransaction();
		Certification stdc1 = new Certification();
		Certification stdc2 = new Certification();
		Student s1 = new Student();
		s1.setStudent_name("Bryce");
		(s1.getCertification()).add(stdc1);
		Student s2 = new Student();
		s2.setStudent_name("Bryce");
		(s2.getCertification()).add(stdc2);
		se.save(s1);
		se.save(s2);
		se.getTransaction().commit();
        se.close();
	}
}
