package com.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class GrandLyonService {
	
	@Value("${TRAFFIC_URL}")
	private String url ;
	
	@Value("${AUTH_VAR}")
	private String authToken;

	@RequestMapping(value="api/trafic", method=RequestMethod.GET, produces="application/json")
	public ResponseEntity<String> getLiveTraffic(){
		RestTemplate rt = new RestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", authToken);
		
		HttpEntity<String> entity = new HttpEntity<String>(headers);
		
		return rt.exchange(url, HttpMethod.GET, entity, String.class);
	}
}
