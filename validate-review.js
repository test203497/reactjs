/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'jquery/validate',
    'mage/translate'
], function ($) {
    'use strict';
    //console.log("Test block");
   
  $.validator.addMethod(
        'rating-required', function (value) {
            return value !== undefined;
        }, $.mage.__('Please select one of each of the ratings above.'));
   $.validator.addMethod(
      'name-required',function(val){
       return val;
   },$.mage.__("Please fill nickname field.")
 );
    $.validator.addMethod(
      'validate-name-rule', function(value){
        var regex = /^[a-zA-Z ]{2,30}$/;
        return value.match(regex);
      },$.mage.__("Please fill a to z alphabet.")
    );
   $.validator.addMethod(
    'summary-required',function(val){
        return val;
    },$.mage.__("Please fill summary field.")
   );
   $.validator.addMethod(
    'validate-summary-rule', function(value){
      var regex = /^[a-zA-Z ]{2,30}$/;
      return value.match(regex);
    },$.mage.__("Please fill summary A to Z.")
   );
   $.validator.addMethod(
     'review-required', function(val){
        return val;
     },$.mage.__("Please fill review field")
   );
   $.validator.addMethod(
    'validate-review-rule',function(value){
     var regex = /^[a-zA-Z ]{2,30}$/;
     return value.match(regex);
    },$.mage.__("Please fill review A to Z")
   );
});
