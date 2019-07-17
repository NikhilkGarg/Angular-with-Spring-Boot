package com.core.app.module;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int userID;
	private String userName;
	private String userAddress;
	private String bloodType;
	private long userContact;

	@DateTimeFormat(pattern="dd/MM/yyyy")
	private String userDOB;
	private String userGender;
	private int userWeight;
	private boolean donerEligiblity;
	@NotEmpty(message="Username is required")
	private String userPassword;
	@NotEmpty(message="Password is required")
	private String userUserName;

	public int getUserID() {
		return userID;
	}

	public void setUserID(int userID) {
		this.userID = userID;
	}
	
	//@Column(length = 30)
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	//@Column(length = 100)
	public String getUserAddress() {
		return userAddress;
	}
	
	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}
	
	//@Column(length = 5)
	public String getBloodType() {
		return bloodType;
	}
	
	public void setBloodType(String bloodType) {
		this.bloodType = bloodType;
	}
	
	
	public long getUserContact() {
		return userContact;
	}
	
	public void setUserContact(long userContact) {
		this.userContact = userContact;
	}
	
	@Temporal(TemporalType.DATE)
	public String getUserDOB() {
		return userDOB;
	}
	
	public void setUserDOB(String userDOB) {
		this.userDOB = userDOB;
	}
	
	//@Column(length = 10)
	public String getUserGender() {
		return userGender;
	}
	
	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}
	
	public int getUserWeight() {
		return userWeight;
	}
	
	public void setUserWeight(int userWeight) {
		this.userWeight = userWeight;
	}
	
	
	public boolean isDonerEligiblity() {
		return donerEligiblity;
	}
	
	public void setDonerEligiblity(boolean donerEligiblity) {
		this.donerEligiblity = donerEligiblity;
	}
	
	@Column(length = 20, unique = true)
	public String getUserPassword() {
		return userPassword;
	}
	
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	
	@Column(length = 20, unique = true)
	public String getUserUserName() {
		return userUserName;
	}
	
	public void setUserUserName(String userUserName) {
		this.userUserName = userUserName;
	}

	@Override
	public String toString() {
		return "User [userID=" + userID + ", userName=" + userName + ", userAddress=" + userAddress + ", bloodType="
				+ bloodType + ", userContact=" + userContact + ", userDOB=" + userDOB + ", userGender=" + userGender
				+ ", userWeight=" + userWeight + ", donerEligiblity=" + donerEligiblity + ", userPassword="
				+ userPassword + ", userUserName=" + userUserName + "]";
	}

	public User() {
		super();
		System.out.println("In user Constructor");
	}
	
	public User(String userPassword, String userUserName) {
		super();
		this.userPassword = userPassword;
		this.userUserName = userUserName;
	}

	public User(String userName, String userAddress, String bloodType, long userContact, @NotNull String userDOB,
			String userGender, int userWeight, boolean donerEligiblity,
			@NotEmpty(message = "Username is required") String userUserName,
			@NotEmpty(message = "Password is required") String userPassword) {
		super();
		this.userName = userName;
		this.userAddress = userAddress;
		this.bloodType = bloodType;
		this.userContact = userContact;
		this.userDOB = userDOB;
		this.userGender = userGender;
		this.userWeight = userWeight;
		this.donerEligiblity = donerEligiblity;
		this.userPassword = userPassword;
		this.userUserName = userUserName;
	}


	
}
