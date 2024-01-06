package com.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.entity.Employee;
import com.project.service.EmployeeServiceInterface;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/code")
public class EmployeeController {
	
	@Autowired
	private EmployeeServiceInterface empSer;
	
	@PostMapping("/save")
	public ResponseEntity<Employee> saveEmployee(@RequestBody Employee e)
	{
		return new ResponseEntity<Employee>(empSer.addEmp(e),HttpStatus.CREATED);
	}
	@GetMapping("/all")
	public ResponseEntity<List<Employee>> getAllEmployee()
	{
		return new ResponseEntity<List<Employee>>(empSer.getAllEmp(),HttpStatus.OK);
	}
	@GetMapping("/id/{eid}")
	public ResponseEntity<Employee> getById(@PathVariable("eid") int id)
	{
		return new ResponseEntity<Employee>(empSer.getEmpById(id),HttpStatus.OK);
	}
	@DeleteMapping("/del/{eid}")
	public ResponseEntity<String> delEmployee(@PathVariable("eid") int id)
	{
		empSer.deleteEmp(id);
		return new ResponseEntity<String>("Deleted Successfully",HttpStatus.ACCEPTED);
	}
	@PutMapping("/update/{eid}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("eid") int id, @RequestBody Employee e)
	{
		//empSer.deleteEmp(id);
		return new ResponseEntity<Employee>(empSer.update(id,e),HttpStatus.ACCEPTED);
	}
}
