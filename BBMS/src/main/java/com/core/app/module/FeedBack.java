package com.core.app.module;

import javax.persistence.*;

@Entity
public class FeedBack {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int feedID;
	private String name,email,feedback;
	public int getFeedID() {
		return feedID;
	}
	public void setFeedID(int feedID) {
		this.feedID = feedID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getFeedback() {
		return feedback;
	}
	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	@Override
	public String toString() {
		return "FeedBack [feedID=" + feedID + ", name=" + name + ", email=" + email + ", feedback=" + feedback + "]";
	}
	public FeedBack() {
		super();
		System.out.println("in feedback");
	}
	public FeedBack(String name, String email, String feedback) {
		super();
		//this.feedID = feedID;
		this.name = name;
		this.email = email;
		this.feedback = feedback;
	}
	
	

}
