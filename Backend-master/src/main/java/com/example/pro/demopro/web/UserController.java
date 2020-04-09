package com.example.pro.demopro.web;
import com.example.pro.demopro.domain.User;
import com.example.pro.demopro.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Date;
import java.util.Properties;

@CrossOrigin
@RestController
@RequestMapping("/api/Users")
public class UserController {

    @Autowired
    private UserService userService;

    @Value("${gmail.username}")
    private String username;

    @Value("${gmail.password}")
    private String password;

    @PostMapping("")
    public ResponseEntity<?> addCustomer(@RequestBody User user) throws MessagingException {
        String x=user.getName();
        boolean check=userService.checkName(x);
        System.out.println(check);
        if(check==false) {
            User newCus = userService.saveOrUpdateCustomer(user);
            String xcon="Your account has been created In Our Shopping Store.Your position is **STORE MANAGER**."+"\n\n"+" username:"+user.getName()+" password:"+user.getPassword()+"We have send you the login credentials via this email. Please reset your password **AS SOON AS YOU RECIEVED THIS EMAIL***";

            if(user.getPost().equals("STOCK_MANAGER")) {
                sendmail(user.getEmail(), xcon);
            }
            return new ResponseEntity<User>(newCus, HttpStatus.CREATED);
        }else{
            Map<String ,String> er=new HashMap<>();
            er.put("error","user name existed");
            return new ResponseEntity<Map<String ,String>>(er, HttpStatus.BAD_REQUEST);
        }




    }
    @GetMapping("/all")
    public Iterable<User> getAllPts(){
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getPTById(@PathVariable String id){
        User user=userService.findById(id);
        return new ResponseEntity<User>(user,HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<?> getName(@PathVariable String name){
        User user=userService.findByName(name);
        return new ResponseEntity<User>(user,HttpStatus.OK);
    }

    private void sendmail(String useremail,Object xcon) throws MessagingException {

        Properties props=new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", "smtp.gmail.com");
        props.put("mail.smtp.port", "587");

        Session session = Session.getInstance(props,
                new javax.mail.Authenticator(){
                    protected PasswordAuthentication getPasswordAuthentication(){
                        return new PasswordAuthentication(username,password);
                    }
                }
        );
        Message msg=new MimeMessage(session);

        msg.setFrom(new InternetAddress(username,false));
        msg.setRecipients(Message.RecipientType.TO,InternetAddress.parse(useremail));
        msg.setSubject("Created a New Login");
        msg.setContent(xcon,"text/html");
        msg.setSentDate(new Date());

        Transport.send(msg);
    }

}
