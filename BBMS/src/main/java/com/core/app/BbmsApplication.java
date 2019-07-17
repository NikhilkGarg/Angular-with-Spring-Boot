package com.core.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.core.app.dao.AdminRepo;
import com.core.app.dao.BloodBankRepo;
import com.core.app.dao.CampaignRepo;
import com.core.app.dao.DonationRepo;
import com.core.app.dao.FeedbackRepo;
import com.core.app.dao.NotificationRepo;
import com.core.app.dao.StaffRepo;
import com.core.app.dao.UserRepo;
import com.core.app.module.Admin;
import com.core.app.module.BloodBank;
import com.core.app.module.Campaign;
import com.core.app.module.Donation;
import com.core.app.module.FeedBack;
import com.core.app.module.Notification;
import com.core.app.module.Staff;
import com.core.app.module.User;

@SpringBootApplication
public class BbmsApplication implements CommandLineRunner{

	@Autowired
	private UserRepo uRepo;
	@Autowired
	private StaffRepo sRepo;
	@Autowired
	private AdminRepo aRepo;
	@Autowired
	private BloodBankRepo bRepo;
	@Autowired
	private CampaignRepo cRepo;
	@Autowired
	private DonationRepo dRepo;
	@Autowired
	private NotificationRepo nRepo;
	@Autowired
	private FeedbackRepo fRepo;
	
	public static void main(String[] args) {
		SpringApplication.run(BbmsApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
	
		fRepo.save(new FeedBack("Lucky","lucky@gmail.com","your app is very good"));
		
		bRepo.save(new BloodBank("B+", "08/01/2019", "08/03/2019"));
		cRepo.save(new Campaign("02/02/2019","12/02/2019","CDAC"));
		dRepo.save(new Donation(1,"04/05/2018",2,1,"B+","Gwalior"));
		nRepo.save(new Notification("New Campaign at CDAC Pune",1,1,411008,"B+","08/11/2018",false));

		uRepo.save(new User("User","Pune","B+",1234567890l,"04/05/2018","Female",61,false,"password","123"));
		
		sRepo.save(new Staff("staff","Pune",6551646541l,"Female","staff","password"));
		
		
		aRepo.save(new Admin("admin","admin","password"));
		
		
		
		
	}


}

