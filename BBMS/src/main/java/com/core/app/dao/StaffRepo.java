package com.core.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.core.app.module.Staff;

public interface StaffRepo extends JpaRepository<Staff, Integer>{

	@Query("from Staff where staffUserName=?1 and staffPassword=?2")
	public Optional<Staff> validateStaff(String staffUserName,String staffPassword);

}
