package com.revature.services;

import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;

import org.springframework.stereotype.Service;

import com.revature.dao.UserDao;
import com.revature.dao.UserDaoHibernate;
import com.revature.entities.User;
import com.revature.utilities.Password;

@Service
public class UserService {

	public void addUser(User u)
	{
		UserDao ud = new UserDaoHibernate();
		Password pHash = new Password();
		String tempPass = u.getPassword();
		try {
			byte[] salt = pHash.getSalt();
			String hashedPass = pHash.getSecurePassword(tempPass, salt);
			u.setPassword(hashedPass);
			u.setSalt(salt);
			
			ud.addUser(u);
			
			
		} catch (NoSuchAlgorithmException | NoSuchProviderException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
}
