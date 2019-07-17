package com.core.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.core.app.module.Admin;

public interface AdminRepo extends JpaRepository<Admin, Integer>{
	
	@Query("from Admin where adminUserName=?1 and adminPassword=?2")
	public Optional<Admin> validateAdmin(String adminUserName,String adminPassword);


}
