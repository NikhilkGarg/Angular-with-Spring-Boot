package com.core.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.core.app.module.Notification;

public interface NotificationRepo extends JpaRepository<Notification, Integer>{

}
