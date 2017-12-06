package com.revature.beans;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;

@Entity
public class Student {
	@Id
	@SequenceGenerator(name = "STU_SEQ", sequenceName = "STU_SEQ")
	@GeneratedValue(generator = "STU_SEQ", strategy = GenerationType.AUTO)
	private int student_id;
	private String student_name;
	
	@ManyToMany(cascade = CascadeType.ALL)
	private Set<Certification> certification = new HashSet<Certification>(0);
	
	
	public Set<Certification> getCertification() {
		return certification;
	}
	public void setCertification(Set<Certification> certification) {
		this.certification = certification;
	}
	public int getStudent_id() {
		return student_id;
	}
	public void setStudent_id(int student_id) {
		this.student_id = student_id;
	}
	public String getStudent_name() {
		return student_name;
	}
	public void setStudent_name(String student_name) {
		this.student_name = student_name;
	}
	
}
