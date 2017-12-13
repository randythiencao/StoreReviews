package com.revature.services;

import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.dao.UserDao;
import com.revature.dao.UserDaoHibernate;
import com.revature.entities.User;
import com.revature.utilities.Password;

@Service
public class CPService {
	@Autowired
	Password pHash;
//	@Autowired
	UserDao ud = new UserDaoHibernate();

	public User changePass(User u) {
		String tempPass = u.getPassword();
		System.out.println(u);
		try {
			byte[] salt = pHash.getSalt();
			String hashedPass = pHash.getSecurePassword(tempPass, salt);
			u.setPassword(hashedPass);
			u.setSalt(salt);

			ud.updateUser(u);
			return u;

		} catch (NoSuchAlgorithmException | NoSuchProviderException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

}
