package com.core.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.core.app.module.Donation;

public interface DonationRepo extends JpaRepository<Donation, Integer>{

}
