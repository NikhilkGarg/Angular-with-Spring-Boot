package com.core.app.module;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Campaign {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int campaignID;
 
	@DateTimeFormat(pattern="dd/MM/yyyy")
	private String startDate;

	@DateTimeFormat(pattern="dd/MM/yyyy")
	private String endDate;
	
	private String address;

	public int getCampaignID() {
		return campaignID;
	}

	public void setCampaignID(int campaignID) {
		this.campaignID = campaignID;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	@Override
	public String toString() {
		return "Campaign [campaignID=" + campaignID + ", startDate=" + startDate + ", endDate=" + endDate + ", address="
				+ address + "]";
	}

	public Campaign(@NotNull String startDate, @NotNull String endDate, String address) {
		super();
		this.startDate = startDate;
		this.endDate = endDate;
		this.address = address;
	}

	public Campaign() {
		super();
		System.out.println("in campaign const");
	}
	
	
	
	
}
