package com.core.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.core.app.module.User;

public interface UserRepo extends JpaRepository<User, Integer> {
	
	//public Optional<User> findByUserUserName(String userUserName);
	@Query("from User where userUserName=?1 and userPassword=?2")
	public Optional<User> validateUser(String userUserName,String userPassword);
}
