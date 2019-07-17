package com.core.app.module;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
public class Notification {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int notifID;
	private String notifMSG;
	private int userID;
	private int campaignID;
	private long postCode;
	private String bloodType;
 
	@DateTimeFormat(pattern="dd/MM/yyyy")
	private String lastDonate;
	private boolean donerEligiblity;
	
	public int getNotifID() {
		return notifID;
	}
	public void setNotifID(int notifID) {
		this.notifID = notifID;
	}
	public String getNotifMSG() {
		return notifMSG;
	}
	public void setNotifMSG(String notifMSG) {
		this.notifMSG = notifMSG;
	}
	public int getUserID() {
		return userID;
	}
	public void setUserID(int userID) {
		this.userID = userID;
	}
	public int getCampaignID() {
		return campaignID;
	}
	public void setCampaignID(int campaignID) {
		this.campaignID = campaignID;
	}
	public long getPostCode() {
		return postCode;
	}
	public void setPostCode(long postCode) {
		this.postCode = postCode;
	}
	public String getBloodType() {
		return bloodType;
	}
	public void setBloodType(String bloodType) {
		this.bloodType = bloodType;
	}
	public String getLastDonate() {
		return lastDonate;
	}
	public void setLastDonate(String lastDonate) {
		this.lastDonate = lastDonate;
	}
	public boolean isDonerEligiblity() {
		return donerEligiblity;
	}
	public void setDonerEligiblity(boolean donerEligiblity) {
		this.donerEligiblity = donerEligiblity;
	}
	@Override
	public String toString() {
		return "Notification [notifID=" + notifID + ", notifMSG=" + notifMSG + ", userID=" + userID + ", campaignID="
				+ campaignID + ", postCode=" + postCode + ", bloodType=" + bloodType + ", lastDonate=" + lastDonate
				+ ", donerEligiblity=" + donerEligiblity + "]";
	}
	public Notification(String notifMSG, int userID, int campaignID, long postCode, String bloodType,
			@NotNull String lastDonate, boolean donerEligiblity) {
		super();
		this.notifMSG = notifMSG;
		this.userID = userID;
		this.campaignID = campaignID;
		this.postCode = postCode;
		this.bloodType = bloodType;
		this.lastDonate = lastDonate;
		this.donerEligiblity = donerEligiblity;
	}
	public Notification() {
		super();
		System.out.println("in notification const");
	}
	
	
	
	
}
