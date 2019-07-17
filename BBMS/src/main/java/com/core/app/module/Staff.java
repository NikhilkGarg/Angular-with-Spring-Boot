package com.core.app.module;

import javax.persistence.*;

@Entity
public class Staff {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int staffID;
	private String staffName;
	private String staffAddress;
	private long staffContact;
	private String staffGender;
	private String staffUserName;
	private String staffPassword;
	
	public int getStaffID() {
		return staffID;
	}
	
	public void setStaffID(int staffID) {
		this.staffID = staffID;
	}
	
	@Column(length = 20, unique = true)
	public String getStaffUserName() {
		return staffUserName;
	}

	public void setStaffUserName(String staffUserName) {
		this.staffUserName = staffUserName;
	}
	@Column(length = 20, unique = true)
	public String getStaffPassword() {
		return staffPassword;
	}

	public void setStaffPassword(String staffPassword) {
		this.staffPassword = staffPassword;
	}

	//@Column(length = 20)
	public String getStaffName() {
		return staffName;
	}
	
	public void setStaffName(String staffName) {
		this.staffName = staffName;
	}
	
	//@Column(length = 100)
	public String getStaffAddress() {
		return staffAddress;
	}
	
	public void setStaffAddress(String staffAddress) {
		this.staffAddress = staffAddress;
	}
	
	
	public long getStaffContact() {
		return staffContact;
	}
	
	public void setStaffContact(long staffContact) {
		this.staffContact = staffContact;
	}
	
	@Column(length = 10)
	public String getStaffGender() {
		return staffGender;
	}
	
	public void setStaffGender(String staffGender) {
		this.staffGender = staffGender;
	}
	
	@Override
	public String toString() {
		return "Staff [staffID=" + staffID + ", staffName=" + staffName + ", staffAddress=" + staffAddress
				+ ", staffContact=" + staffContact + ", staffGender=" + staffGender + ", staffUserName=" + staffUserName
				+ ", staffPassword=" + staffPassword + "]";
	}

	public Staff() {
		super();
		System.out.println("in staff const");
	}

	public Staff(String staffName, String staffAddress, long staffContact, String staffGender,
			String staffUserName, String staffPassword) {
		super();
		this.staffName = staffName;
		this.staffAddress = staffAddress;
		this.staffContact = staffContact;
		this.staffGender = staffGender;
		this.staffUserName = staffUserName;
		this.staffPassword = staffPassword;
	}
	
}
