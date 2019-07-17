package com.core.app.module;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity 
public class BloodBank {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bloodSerialNo;
	private String bloodType;

	@DateTimeFormat(pattern="dd/MM/yyyy")
	private String dateEntry;
	
	@DateTimeFormat(pattern="dd/MM/yyyy")
	private String dateExpire;
	
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
	public String getDateEntry() {
		return dateEntry;
	}
	public void setDateEntry(String dateEntry) {
		this.dateEntry = dateEntry;
	}
	public String getDateExpire() {
		return dateExpire;
	}
	public void setDateExpire(String dateExpire) {
		this.dateExpire = dateExpire;
	}
	@Override
	public String toString() {
		return "BloodBank [bloodSerialNo=" + bloodSerialNo + ", bloodType=" + bloodType + ", dateEntry=" + dateEntry
				+ ", dateExpire=" + dateExpire + "]";
	}
	public BloodBank(String bloodType, @NotNull String dateEntry, @NotNull String dateExpire) {
		super();
		this.bloodType = bloodType;
		this.dateEntry = dateEntry;
		this.dateExpire = dateExpire;
	}
	public BloodBank() {
		super();
		System.out.println("in Bloodbank const");
	}

	
}
