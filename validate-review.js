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
    /*$.validator.addMethod(
      'name-required', function(val, element){
         console.log('error handling');
      },$.mage.__('Please select nickname_field.')
    );*/
  $.validator.addMethod(
      'name-required',function(val){
       return val.match(/^[a-zA-Z0-9-_@.]+$/);
     },$.mage.__("Invalid please check name on alphabet")
    );
});
