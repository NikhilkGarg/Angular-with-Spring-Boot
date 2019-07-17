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

import com.core.app.dao.AdminRepo;
import com.core.app.dao.FeedbackRepo;
import com.core.app.module.Admin;
import com.core.app.module.FeedBack;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class AdminController {

	@Autowired
	private AdminRepo aRepo;
	@Autowired
	private FeedbackRepo fRepo;
	
	@GetMapping("/admins")
	public ResponseEntity<List<Admin>> getAdmins(){
		ResponseEntity<List<Admin>> re = new ResponseEntity<>(aRepo.findAll(),HttpStatus.OK);
		return re;
	}
	
	@RequestMapping("/admin/login/{adminUserName}&{adminPassword}")
	public ResponseEntity<Optional<Admin>> getAdminValidate(@PathVariable String adminUserName,@PathVariable String adminPassword) 
	{
		ResponseEntity<Optional<Admin>> re = new ResponseEntity<>(aRepo.validateAdmin(adminUserName,adminPassword),HttpStatus.OK);
		return re;
	}

	@GetMapping("/admin/{adminID}")
	public ResponseEntity<Optional<Admin>> getAdminById(@PathVariable Integer adminID) {
		ResponseEntity<Optional<Admin>> re = new ResponseEntity<>(aRepo.findById(adminID),HttpStatus.OK);
		return re;
	}

	@DeleteMapping("/admin/{adminID}")
	public boolean deleteAdmin(@PathVariable Integer adminID) {
		aRepo.deleteById(adminID);
		return true;
	}
	
	@PostMapping("/admin")
	public ResponseEntity<Admin> createStaff(@RequestBody Admin admin){
		ResponseEntity<Admin> re = new ResponseEntity<>(aRepo.save(admin),HttpStatus.OK);
		return re;
	}

	@PutMapping("/admin")
	public ResponseEntity<Admin> updateStaff(@RequestBody Admin admin){
		ResponseEntity<Admin> re =  new ResponseEntity<>(aRepo.save(admin),HttpStatus.OK);
		return re;
	}
	
	
	//FeedBack
	@GetMapping("/admin/feedbacks")
	public ResponseEntity<List<FeedBack>> getFeedBacks()
	{
		ResponseEntity<List<FeedBack>> re = new ResponseEntity<>(fRepo.findAll(),HttpStatus.OK);
		return re;
	}
	
	@PostMapping("/admin/feedback")
	public ResponseEntity<FeedBack> createFeedBack(@RequestBody FeedBack feed){
		ResponseEntity<FeedBack> re = new ResponseEntity<>(fRepo.save(feed),HttpStatus.OK);
		return re;
	}
}
