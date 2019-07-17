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

import com.core.app.dao.BloodBankRepo;
import com.core.app.dao.CampaignRepo;
import com.core.app.dao.NotificationRepo;
import com.core.app.dao.StaffRepo;
import com.core.app.module.BloodBank;
import com.core.app.module.Campaign;
import com.core.app.module.Notification;
import com.core.app.module.Staff;

@RestController
@CrossOrigin(origins="http://localhost:4200",allowedHeaders="*")
public class StaffController {

	@Autowired
	private StaffRepo sRepo;
	@Autowired
	private NotificationRepo nRepo;
	@Autowired
	private CampaignRepo cRepo;
	@Autowired
	private BloodBankRepo bRepo;
	
		/*Staff*/
	@GetMapping("/staffs")
	public ResponseEntity<List<Staff>> getStaffs(){
		ResponseEntity<List<Staff>> rp = new ResponseEntity<>(sRepo.findAll(),HttpStatus.OK);
		return rp;
	}
	
	@RequestMapping("/staff/login/{staffUserName}&{staffPassword}")
	public ResponseEntity<Optional<Staff>> getStaffValidate(@PathVariable String staffUserName,@PathVariable String staffPassword) 
	{
		ResponseEntity<Optional<Staff>> rp = new ResponseEntity<>(sRepo.validateStaff(staffUserName,staffPassword),HttpStatus.OK);
		System.out.println("in login :    "+staffUserName+ "     "+staffPassword);
		return rp;
	}

	@GetMapping("/staff/{staffID}")
	public ResponseEntity<Optional<Staff>> getStaffById(@PathVariable Integer staffID) {
		ResponseEntity<Optional<Staff>> rp = new ResponseEntity<>(sRepo.findById(staffID),HttpStatus.OK);
		return rp;
	}

	@DeleteMapping("/staff/{staffID}")
	public boolean deleteStaff(@PathVariable Integer staffID) {
		sRepo.deleteById(staffID);
		return true;
	}
	
	@PostMapping("/staff")
	public ResponseEntity<Staff> createStaff(@RequestBody Staff staff){
		ResponseEntity<Staff> rp = new ResponseEntity<Staff>(sRepo.save(staff),HttpStatus.OK);
		return rp;
	}

	@PutMapping("/staff")
	public ResponseEntity<Staff> updateStaff(@RequestBody Staff staff){
		ResponseEntity<Staff> rp = new ResponseEntity<Staff>(sRepo.save(staff),HttpStatus.OK);
		return rp;
	}

		/*BloodBank*/
	//ListBloodBank
	@GetMapping("/staff/bloodbanks")
	public ResponseEntity<List<BloodBank>> getBloodBank(){
		ResponseEntity<List<BloodBank>> rp = new ResponseEntity<>(bRepo.findAll(),HttpStatus.OK);
		return rp;
	}
	
	//Create BloodBank
	@PostMapping("/staff/bloodbank/create")
	public ResponseEntity<BloodBank> createBloodBank(@RequestBody BloodBank bb)
	{
		ResponseEntity<BloodBank> rp = new ResponseEntity<>(bRepo.save(bb),HttpStatus.OK);
		return rp;
	}
	
	//Update BloodBank
	@PutMapping("/staff/bloodbank/update")
	public ResponseEntity<BloodBank> updateBloodBank(@RequestBody BloodBank bb)
	{
		ResponseEntity<BloodBank> rp = new ResponseEntity<>(bRepo.save(bb),HttpStatus.OK);
		return rp;
	}
	
		/*Campaign*/
	//Create Campaigns
	@PostMapping("/staff/campaign/create")
	public ResponseEntity<Campaign> createCampaign(@RequestBody Campaign camp)
	{
		ResponseEntity<Campaign> rp = new ResponseEntity<Campaign>(cRepo.save(camp),HttpStatus.OK);
		return rp;
	}
	
	//Update Campaigns
	@PutMapping("/staff/campaign/update")
	public ResponseEntity<Campaign> updateCampaign(@RequestBody Campaign camp)
	{
		ResponseEntity<Campaign> rp = new ResponseEntity<Campaign>(cRepo.save(camp),HttpStatus.OK);
		return rp;
	}
	
	//List Campaigns
	@RequestMapping("/staff/campaigns")
	public ResponseEntity<List<Campaign>> getCampaigns()
	{
		ResponseEntity<List<Campaign>> rp = new ResponseEntity<>(cRepo.findAll(),HttpStatus.OK);
		return rp;
	}

	//Delete Campaigns
	@DeleteMapping("/staff/campaign/{campaignID}")
	public boolean deleteCampaign(@PathVariable Integer campaignID) {
		sRepo.deleteById(campaignID);
		return true;
	}
	

		/*Notification*/
	//List Notification
	@RequestMapping("/staff/notifs")
	public ResponseEntity<List<Notification>> getNotifications()
	{
		ResponseEntity<List<Notification>> rp = new ResponseEntity<>(nRepo.findAll(),HttpStatus.OK);
		return rp;
	}
	
	//Update Notification
	@PutMapping("/staff/notis/update")
	public ResponseEntity<Notification> updateNotification(@RequestBody Notification notis)
	{
		ResponseEntity<Notification> rp = new ResponseEntity<>(nRepo.save(notis),HttpStatus.OK);
		return rp;
	}
	
	//Create Notification
	@PostMapping("/staff/notif/create")
	public ResponseEntity<Notification> createNotification(@RequestBody Notification notis)
	{
		ResponseEntity<Notification> rp = new ResponseEntity<>(nRepo.save(notis),HttpStatus.OK);
		return rp;
	}
	
	//Delete Notification
	@DeleteMapping("/staff/notif/{notifID}")
	public boolean deleteNotification(@PathVariable Integer notifID) {
		sRepo.deleteById(notifID);
		return true;
	}
	
}