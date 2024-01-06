package com.project.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.project.entity.Employee;

@Service
public interface EmployeeServiceInterface {
	
	public Employee addEmp(Employee emp);
	public List<Employee> getAllEmp();
	public Employee getEmpById(int id);
	public void deleteEmp(int id);
	public Employee update(int id, Employee emp);

}
