package com.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class GrandLyonService {
	
	@Value("${TRAFFIC_URL}")
	private static String url ;

	@RequestMapping(value="api/traffic", method=RequestMethod.GET, produces="application/json")
	public ResponseEntity<String> getLiveTraffic(){
		RestTemplate rt = new RestTemplate();
		String retour = rt.getForObject(url, String.class);
		
		return new ResponseEntity<String>(retour, HttpStatus.OK);
	}
}
