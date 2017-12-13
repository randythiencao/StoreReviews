package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.User;
import com.revature.services.CPService;
import com.revature.services.UserService;

@RestController
@RequestMapping("cpanel")
@CrossOrigin(allowCredentials = "true", origins = "http://localhost:4200")
public class CPController {

	
//	@Autowired
	CPService cps = new CPService();
//	@Autowired
	UserService us = new UserService();
	
	@PostMapping("update")
	public ResponseEntity<?> updateUser(@RequestBody User u)
	{
		System.out.println("updadting");
		return new ResponseEntity<>(cps.changePass(u), HttpStatus.OK);
	}
	
}
