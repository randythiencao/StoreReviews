package com.revature.controllers;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entities.UserReg;

@RestController
@RequestMapping("users")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@PostMapping("login")
	public ResponseEntity<?> getUser(@RequestBody UserReg uReg) {
		if (uReg.getEmail().equals("test") && uReg.getPassword().equals("test")) {
			return new ResponseEntity<>(uReg, HttpStatus.OK);
		}
		return new ResponseEntity<>(new UserReg(), HttpStatus.OK);

	}

	@PostMapping("register")
	public ResponseEntity<?> regUser(@RequestBody UserReg uReg) {
		System.out.println(uReg);
		return new ResponseEntity<>(uReg, HttpStatus.OK);

	}

	// @GetMapping
	// public List<User> getAllUsers() {
	// List<User> users = new ArrayList<>();
	// users.add(new User(1, new Credential("user", "pass")));
	// users.add(new User(2, new Credential("admin", "admin")));
	// users.add(new User(3, new Credential("blake", "p4ssw0rd")));
	//
	// return users;
	// }
	//
	// @GetMapping("{id}/{other}")
	// public User findById(@PathVariable int id, @PathVariable String other) {
	// System.out.println("request to find user with id:" + id);
	// System.out.println(other);
	// return null;
	// }
	//
	// @PostMapping("login")
	// public User login(@RequestBody Credential cred) {
	// System.out.println(cred);
	// if ("user".equals(cred.getUsername()) &&
	// "password".equals(cred.getPassword())) {
	// return new User(11, cred);
	// } else {
	// return null;
	// }
	// }
	//
	// @PutMapping
	// public User update(@RequestBody User u) {
	// System.out.println("updating user:" + u);
	// return u;
	// }

}
