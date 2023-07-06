import React from "react";
import '../../styles/phoneanimation.css'
import { useEffect } from "react";

export default function PhoneAnimation (){

   useEffect(() => {
    var phonePosts = document.querySelectorAll(".phone-post");
  
    phonePosts.forEach(function(phonePost) {
      phonePost.classList.add("active");
  
      setTimeout(function() {
        phonePost.classList.remove("active");
      }, 1500);
    });
  
    setInterval(function() {
      phonePosts.forEach(function(phonePost) {
        phonePost.classList.add("active");
  
        setTimeout(function() {
          phonePost.classList.remove("active");
        }, 1500);
      });
    }, 2000);
   }, [])
   
    return(
        <div class="phone">
        <div class="phone-shade"></div>
        
        <div class="phone-speaker"></div>
        
        <div class="phone-screen">
          
          <div class="phone-header">
            <div class="phone-menu"></div>
          </div>
          
          <div class="phone-post" id="first-post">
            <div class="post-thumb"></div>
            <div class="line post-title-1"></div>
            <div class="line post-title-2"></div>
            <div class="line post-line-1"></div>
            <div class="line post-line-2"></div>
          </div>
          
          <div class="phone-post">
            <div class="post-thumb"></div>
            <div class="post-title-1"></div>
            <div class="post-title-2"></div>
            <div class="post-line-1"></div>
            <div class="post-line-2"></div>
          </div>
          
          <div class="phone-post">
            <div class="post-thumb"></div>
            <div class="post-title-1"></div>
            <div class="post-title-2"></div>
            <div class="post-line-1"></div>
            <div class="post-line-2"></div>
          </div>
          
          <div class="phone-post">
            <div class="post-thumb"></div>
            <div class="post-title-1"></div>
            <div class="post-title-2"></div>
            <div class="post-line-1"></div>
            <div class="post-line-2"></div>
          </div>
          
          <div class="phone-post">
            <div class="post-thumb"></div>
            <div class="post-title-1"></div>
            <div class="post-title-2"></div>
            <div class="post-line-1"></div>
            <div class="post-line-2"></div>
          </div>
          
          <div class="phone-post">
            <div class="post-thumb"></div>
            <div class="post-title-1"></div>
            <div class="post-title-2"></div>
            <div class="post-line-1"></div>
            <div class="post-line-2"></div>
          </div>
          
        </div> 
        
        <div class="phone-button"></div>
      </div> 
    )
}

