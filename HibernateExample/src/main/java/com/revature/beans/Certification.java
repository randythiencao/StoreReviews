package com.revature.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
@Entity
public class Certification {
	@Id
	@SequenceGenerator(name = "CERT_SEQ", sequenceName = "CERT_SEQ")
	@GeneratedValue(generator = "CERT_SEQ", strategy = GenerationType.AUTO)
	private int certification_id;
	private String certification_name;
	
	
	public int getCertification_id() {
		return certification_id;
	}
	public void setCertification_id(int certification_id) {
		this.certification_id = certification_id;
	}
	public String getCertification_name() {
		return certification_name;
	}
	public void setCertification_name(String certification_name) {
		this.certification_name = certification_name;
	}
	
}
