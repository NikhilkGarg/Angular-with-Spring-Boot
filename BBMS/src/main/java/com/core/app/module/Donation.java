package com.core.app.module;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Donation {

	@NotNull 
	@Id
	private int userID;
	@DateTimeFormat(pattern="dd/MM/yyyy")
	private String donateDate;
	private int quantity;
	private int bloodSerialNo;
	private String bloodType;
	private String place;
	
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public String getDonateDate() {
		return donateDate;
	}
	public void setDonateDate(String donateDate) {
		this.donateDate = donateDate;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getBloodSerialNo() {
		return bloodSerialNo;
	}
	public void setBloodSerialNo(int bloodSerialNo) {
		this.bloodSerialNo = bloodSerialNo;
	}
	public String getBloodType() {
		return bloodType;
	}
	public void setBloodType(String bloodType) {
		this.bloodType = bloodType;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	@Override
	public String toString() {
		return "Donation [userID=" + userID + ", donateDate=" + donateDate + ", quantity=" + quantity
				+ ", bloodSerialNo=" + bloodSerialNo + ", bloodType=" + bloodType + ", place=" + place + "]";
	}
	public Donation(@NotNull int userID, String donateDate, int quantity, int bloodSerialNo, String bloodType,
			String place) {
		super();
		this.userID = userID;
		this.donateDate = donateDate;
		this.quantity = quantity;
		this.bloodSerialNo = bloodSerialNo;
		this.bloodType = bloodType;
		this.place = place;
	}
	public Donation() {
		super();
		System.out.println("in Donation const");
	}
	
	
	
}
