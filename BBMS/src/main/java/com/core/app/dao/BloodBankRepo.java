package com.core.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.core.app.module.BloodBank;

public interface BloodBankRepo extends JpaRepository<BloodBank, Integer>{
	

}
