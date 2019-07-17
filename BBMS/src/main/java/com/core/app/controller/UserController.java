package com.core.app.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.core.app.dao.CampaignRepo;
import com.core.app.dao.NotificationRepo;
import com.core.app.dao.UserRepo;
import com.core.app.module.Campaign;
import com.core.app.module.Notification;
import com.core.app.module.User;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class UserController {

	@Autowired
	private UserRepo repo;
	@Autowired
	private NotificationRepo nRepo;
	@Autowired
	private CampaignRepo cRepo;
	
	@GetMapping("/users")
	public ResponseEntity<List<User>> getUsers(){
		ResponseEntity<List<User>> rp = new ResponseEntity<>(repo.findAll(),HttpStatus.OK);
		return rp;
	}
	
	@RequestMapping("/user/login/{userUserName}&{userPassword}")
	public ResponseEntity<Optional<User>> getUserValidate(@PathVariable String userUserName,@PathVariable String userPassword) 
	{
		ResponseEntity<Optional<User>> rp = new ResponseEntity<>(repo.validateUser(userUserName,userPassword),HttpStatus.OK); 
		System.out.println("in login:   "+userUserName+ "     "+userPassword);
		return rp ;
	}

	@GetMapping("/user/{userID}")
	public ResponseEntity<Optional<User>> getUserById(@PathVariable Integer userID) {
		ResponseEntity<Optional<User>> rp = new ResponseEntity<>(repo.findById(userID),HttpStatus.OK);
		return rp;
	}

	@DeleteMapping("/user/{userID}")
	public boolean deleteUser(@PathVariable Integer userID) {
		repo.deleteById(userID);
		return true;
	}
	@DeleteMapping("/user/notification/{notifID}")
	public boolean deleteNotification(@PathVariable Integer notifID) {
		repo.deleteById(notifID);
		return true;
	}
	
	@PostMapping("/user")
	public ResponseEntity<User> createUser(@RequestBody User user){
		ResponseEntity<User> rp = new ResponseEntity<User>(repo.save(user),HttpStatus.OK);
		return rp;
	}

	@PutMapping("/user")
	public ResponseEntity<User> updateUser(@RequestBody User user){
		ResponseEntity<User> rp = new ResponseEntity<User>(repo.save(user),HttpStatus.OK);
		return rp;
	}
	
/*	@RequestMapping("/user/notification/{notifID}")
	public ResponseEntity<Optional<Notification>> getNotificationByID(@PathVariable int notifID){
		ResponseEntity<Optional<Notification>> rp = new ResponseEntity<>(nRepo.findById(notifID),HttpStatus.OK);
		return rp;
	}
	
	@RequestMapping("/user/campaign/{campaignID}")
	public ResponseEntity<Optional<Campaign>> getCampaignByID(@PathVariable int campaignID){
		ResponseEntity<Optional<Campaign>> rp = new ResponseEntity<>(cRepo.findById(campaignID),HttpStatus.OK);
		return rp;
	}
*/	
	@RequestMapping("/user/notifications")
	public ResponseEntity<List<Notification>> getNotifications(){
		ResponseEntity<List<Notification>> rp = new ResponseEntity<>(nRepo.findAll(),HttpStatus.OK);
		return rp;
	}
	
	@RequestMapping("/user/campaigns")
	public ResponseEntity<List<Campaign>> getCampaigns(){
		ResponseEntity<List<Campaign>> rp = new ResponseEntity<>(cRepo.findAll(),HttpStatus.OK);
		return rp;
	}
	
//	@RequestMapping("/user/donation/{userID}")
//	public ResponseEntity<Optional<Donation>> getDonationByUserID(@PathVariable int userID){
//		ResponseEntity<Optional<Donation>> rp = new ResponseEntity<>(dRepo.findById(userID),HttpStatus.OK);
//		return rp;
//	}
//	@RequestMapping("/user/donations")
//	public ResponseEntity<List<Donation>> getDonations(){
//		ResponseEntity<List<Donation>> rp = new ResponseEntity<>(dRepo.findAll(),HttpStatus.OK);
//		return rp;
//	}
//	@PostMapping("/user/donation/form")
//	public ResponseEntity<Donation> requestDonationForm(@RequestBody Donation don){
//		ResponseEntity<Donation> rp = new ResponseEntity<>(dRepo.save(don),HttpStatus.OK);
//		return rp;
//	}
}
