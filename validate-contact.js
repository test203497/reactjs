define([
    'jquery',
    'jquery/validate',
    'mage/translate'
], function($) {
    'use strict';
    //console.log("Welcome to contact us");
    $.validator.addMethod(
        'required-name', function(value){
            return value;
        }, $.mage.__("Please enter required name.")
    );
    $.validator.addMethod(
        'required-email', function(value){
            return value;
        }, $.mage.__("Please enter email address.")
    );
    $.validator.addMethod(
     'required-phone', function(value){
        return value;
     }, $.mage.__("Please enter mobile number.")
    );
    $.validator.addMethod(
     'validate-phone', function(val){
        var regex =/^\d{5}$/i;
        return val.match(regex);
     }, $.mage.__("Please enter valid mobile number.")
    );
    $.validator.addMethod(
     'required-mind', function(value){
        return value;
       },$.mage.__("Please enter your mind field.")
    );
});