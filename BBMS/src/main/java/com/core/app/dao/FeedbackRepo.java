package com.core.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.core.app.module.FeedBack;

public interface FeedbackRepo extends JpaRepository<FeedBack, Integer> {

}
