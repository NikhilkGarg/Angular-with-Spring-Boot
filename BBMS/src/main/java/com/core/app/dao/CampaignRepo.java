package com.core.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.core.app.module.Campaign;

public interface CampaignRepo extends JpaRepository<Campaign, Integer> {

}
