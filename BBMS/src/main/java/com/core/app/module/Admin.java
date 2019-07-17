package com.core.app.module;

import javax.persistence.*;

@Entity
public class Admin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int adminID;
	private String adminName;
	private String adminUserName;
	private String adminPassword;
	
	public int getAdminID() {
		return adminID;
	}
	public void setAdminID(int adminID) {
		this.adminID = adminID;
	}
	
	@Column(length = 20)
	public String getAdminName() {
		return adminName;
	}
	public void setAdminName(String adminName) {
		this.adminName = adminName;
	}

	@Column(length = 20, unique = true)
	public String getAdminUserName() {
		return adminUserName;
	}
	public void setAdminUserName(String adminUserName) {
		this.adminUserName = adminUserName;
	}
	
	@Column(length = 20, unique = true)
	public String getAdminPassword() {
		return adminPassword;
	}
	public void setAdminPassword(String adminPassword) {
		this.adminPassword = adminPassword;
	}
	@Override
	public String toString() {
		return "Admin [adminID=" + adminID + ", adminName=" + adminName + ", adminUserName=" + adminUserName
				+ ", adminPassword=" + adminPassword + "]";
	}
	public Admin(String adminName, String adminUserName, String adminPassword) {
		super();
		this.adminName = adminName;
		this.adminUserName = adminUserName;
		this.adminPassword = adminPassword;
	}
	public Admin() {
		super();
		System.out.println("in admin const");
	}
	
	

}
