package com.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.entity.Employee;
import com.project.repository.EmployeeRepo;

@Service
public class EmployeeService implements EmployeeServiceInterface{

	@Autowired
	private EmployeeRepo repo;
	@Override
	public Employee addEmp(Employee emp) {
		Employee savedemp=repo.save(emp);
		
		return savedemp;
	}
 
	@Override
	public List<Employee> getAllEmp() {
		return repo.findAll();
	}

	@Override
	public Employee getEmpById(int id) {
		return repo.findById(id).get();
	}

	@Override
	public void deleteEmp(int id) {
		if (repo.findById(id)!=null)
		{
			repo.delete(repo.findById(id).get());
		}
		else
		{
			System.out.println("no employee with id"+id+"found to be deleted");
		}
	}

	@Override
	public Employee update(int id, Employee emp) {
		Employee oldemp=repo.findById(id).get();
		if (oldemp!=null)
		{
			emp.setId(id);
			return repo.save(emp);
		}
		return null;
	}

}
