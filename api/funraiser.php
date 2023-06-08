<script>
    document.getElementById("header-menu-col").classList.add('col-md-12');
    document.getElementById("header-menu-col").classList.remove('col-md-9');
</script>
<?php
require('config.php');
$_SESSION['donation_id'] = time();
$reference_user= $conn->real_escape_string($_GET['reference']);
if(empty($reference_user)){
    $reference_user = "";
}
?>

<style>
    #header-donation-buttons {
        display: none !important;
    }

    .donation-section {
        margin: 4rem auto;
    }

    .details {
        padding: 20px;
        background: #f7fafb;
        border: 1px solid #dedede;
        margin-top: 20px;
    }

    .reasons {
        display: block;
        margin-bottom: 0px;
    }

    .quick-value-dollar {
        padding: 5px 10px;
        margin: 0px 5px 5px 5px;
        line-height: 100%;
        background: #33c9f3;
    }

    .quick-value {
        padding: 5px 10px;
        margin: 0px 5px 5px 5px;
        line-height: 100%;
        background: #33c9f3;
    }

    .tab-content {
        border: 2px solid #33c9f3;
        padding: 2rem 25px;
    }

    .nav-tabs>li.active>a,
    .nav-tabs>li.active>a:focus,
    .nav-tabs>li.active>a:hover {
        color: #fff;
        cursor: default;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-color: transparent;
        background: #33c9f3;
    }

    .payment-cycle,
    .payment-format {
        margin: 15px auto;
        font-weight: bold;
    }

    .details select,
    .details input {
        margin-bottom: 10px;
        height: auto;
        padding: 6px 15px;
    }

    .details select {
        display: block;
        width: 100%;
        background: #fff;
        border: 1px solid #e3e3e3;
        padding: 8px 15px;
        height: auto;
    }
</style>














<div class="container" style="padding: 15px;">
	
<div style="border: 2px solid #33c9f3;padding: 0px 20px 20px 20px">
	<div class="row">
			<div class="col-md-8">
		<img src="https://nirmaan.org/wp-content/uploads/2023/05/download.png" style="width: 162px;margin: 30px 0px"/>
           <h3>A small donation from you can change the life of the schoolgirl who gets it.</h3>
	<p>
		You can help make a difference. By presenting a cycle to an underprivileged girl, you can help remove one of the most significant barriers to education in girl children and empower them to reach their full potential. The pride and joy of ownership gives the children new confidence to take on challenges and get to aspire for more and set them on a path to achievement. <br/>
	</p>
				<a href="/rotary-donate-cycle" style="margin: 20px 0px" >→ Click here to read more... </a>
	</div>
	<div class="col-md-4">
		<img  src="https://nirmaan.org/wp-content/uploads/2023/05/rotary1-scaled.jpg"  style="margin-top: 50px;width: 100%;" />
	</div>
		
	</div>

	</div></div>

<div class="donation-section" ng-app="">
    <div class="container">
		
        <form name="razorpayform" method="post" action="/payment-verify">
            <input type="hidden" name="razorpay_payment_id" id="razorpay_payment_id" />
            <input type="hidden" name="razorpay_signature" id="razorpay_signature" />
        </form>

        <ul class="nav nav-tabs donation-tabs">
            <li class="active"><a data-toggle="tab" href="#Covid">Donate Now</a></li>
            <!--<li><a data-toggle="tab" href="#Education" class="tab-title">Skill Development and Entrepreneurship</a></li>-->
            <!--<li><a data-toggle="tab" href="#Livelihood" class="tab-title">Diversity and Inclusion</a></li>-->
            <!--<li><a data-toggle="tab" href="#Ration" class="tab-title">Disaster Response & Covid 19</a></li>-->
            <!--<li><a data-toggle="tab" href="#Hygine" class="tab-title">GiveBack</a></li>-->
            <!--<li><a data-toggle="tab" href="#Others" class="tab-title">Others</a></li>-->
        </ul>


        <form method="POST" action="https://www.paypal.com/cgi-bin/webscr">
            <!--<form method="POST" action="https://sandbox.paypal.com">-->
            <input type="hidden" name="cmd" value="_donations" />
            <!--<input type="hidden" name="hosted_button_id" value="G6T9D5EWBFDJY" />-->
            <!--<input type="hidden" name="hosted_button_id" value="5RY6TABANC5NS" />-->
            <input type="hidden" name="business" value="nirmaanusa@nirmaan.org" />
            <!--<input type="hidden" name="business" value="sb-47epfy6543516@business.example.com" />-->
            <!--<input type="text" name="item_name" class="form-control" value="Hyd needs oxygen">
				 <input type="text" class="form-control" value="USD" id="currency_code">-->
            <div class="tab-content">
                <div id="Covid" class="tab-pane fade in active">
                    <div class="row">
                        <div class="col-md-8">
                            <section class="reason" >
								
        
								<div style="<?=!empty($reference_user)?'display: none':''?>">
                                <b>Referred By: (optional)</b>
                                <input type="hidden" id="reference" class="input_reference" value="<?=$reference_user?>" name="on0" />
                                <!--<select id="reference-dropdown" style="border: 1px solid #ccc; background: white; padding: 1px 10px;width: 300px; margin-bottom: 10px;display: block">-->
                                <!--    <option value="">Refferd name</option>-->
                                <!--    <option value="WIRI">WIRI</option>-->
                                <!--    <option value="Other">Other</option>-->
                                <!--</select>-->
                                <input id="reference-input" type="text" style="padding: 5px 10px;width: 300px; margin-bottom: 10px;" placeholder="Enter Reference Name" value="<?=$reference_user?>" />
								</div>
                                <b>Select Cause:</b>
                                <p class="reasons"><input onclick="document.getElementById('cause-image').src='https://nirmaan.org/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-08-at-5.13.08-PM.jpeg'" type="radio" name="item_name" ng-model="cause_name" value="A Cycle Can Change Her Life 2023" required checked /> <label for="c1reason1">A Cycle Can Change Her Life</label></p>
                            </section>
                            <div id="dollar-amounts" style="display: none">
                                <span>
                                    Amount
                                    <span style="color: #f10000">*</span>
                                    <label class="quick-value-dollar" id="dollar-iqv1">$50</label>
                                    <label class="quick-value-dollar" id="dollar-iqv2">$100</label>
                                    <label class="quick-value-dollar" id="dollar-iqv3">$150</label>
									<label class="quick-value-dollar" id="dollar-iqv4">Other</label>
                                </span>
                                <input type="number" class="input_amount_dollar" placeholder="Enter Amount" id="dollar_input_amount" name="amount" required />
                            </div>
                            <input type="hidden" name="invoice" value="<?= $_SESSION['donation_id'] ?>" />
                            <input type="hidden" name="rm" value="2" />
                            <input type="hidden" name="return" value="<?= $site_url ?>payment-success" />
                            <input type="hidden" name="notify_url" value="<?= $dashboard_url ?>paypal_notify.php" />
                            <!--  <input type="hidden" name="cancel_return" value="<?= $site_url ?>donate" /> -->
                            <input id="donatebtn" type="submit" name="submit" class="btn btn-default" style="margin-top: 10px;display: none" />
                        </div>

                        <div class="col-md-4">
                            <img id="cause-image" src="https://nirmaan.org/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-08-at-5.13.08-PM.jpeg" class="img-responsive" style="width: 200px;" />
						</div>
                    </div>
                </div>

            </div>
        </form>


        <section class="details" id="razorpay-details" style="display: none;border: 2px solid #33c9f3;">
            <form class="donation_form">
                <input type="hidden" class="input_currency_format" name="currency" value="INR" />
                <div class="row">
                    <div class="col-md-6">
                        <span>
                            Amount
                            <span style="color: #f10000">*</span>
                            <label class="quick-value" id="iqv1">&#8377;2000</label>
                            <label class="quick-value" id="iqv2">&#8377;4000</label>
                            <label class="quick-value" id="iqv3">Other</label>
                        </span>
                        <input style="margin-top: 5px" type="number" class="input_amount" id="input_amount" name="amount" required />
                    </div>
                    <div class="col-md-6" id="recurring-input-div" style="display: none">
                        <span>Tenure<span style="color: #f10000">*</span></span>
                        <select name="tenure" id="recurring-input" class="input_tenure">
                            <option value="">-- select an option --</option>
                            <option value="3">3 Months</option>
                            <option value="6">6 Months</option>
                            <option value="9">9 Months</option>
                            <option value="12">1 Year</option>
                        </select>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <span>Mobile Number<span style="color: #f10000">*</span></span>
                        <input type="number" id="mobile" class="input_mobile" name="mobile" required />
                    </div>
                    <div class="col-md-6">
                        <span>Full Name<span style="color: #f10000">*</span></span>
                        <input type="text" id="fullname" class="input_fullname" name="full_name" required />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <span>Address<span style="color: #f10000">*</span></span>
                        <input type="text" id="address" class="input_address" name="address" required />
                    </div>
                    <div class="col-md-6">
                        <span>Pan Number</span>
                        <input type="text" id="pan" class="input_pan" name="Pan" maxlength="10" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <span>Email<span style="color: #f10000">*</span></span>
                        <input type="email" id="email" class="input_email" name="email" required />
                    </div>
                    <div class="col-md-6">
                        <span>Zipcode/Pincode<span style="color: #f10000">*</span></span>
                        <input type="number" id="zip" class="input_zip" name="pincode" required />
                    </div>
                </div>
                <p style="color: red;display: none" id="fill_message">Fill all the fields first</p>
                <button type="submit" class="btn btn-default rzp-button" id="rzp-button" value="submit" name="submit" style="margin-top: 25px">Pay Now</button>
            </form>
        </section>


    </div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
    jQuery(document).ready(function() {
        jQuery('input:radio[name="item_name"]').click(function() {
            jQuery(this).parent().parent(".reason").children('.payment-format').remove();
            jQuery(this).parent().parent(".reason").children('.payment-cycle').remove();
            jQuery("#razorpay-details").hide();
            jQuery("#recurring-input-div").hide();
            jQuery("#recurring-input").hide();
            jQuery('input[name="payment-cycle"]').prop('checked', false);
            jQuery(".payment-cycle").hide();
            jQuery(this).parent().parent(".reason").append(`<section class="payment-format">
                                <b>Select Currency</b><br />
                                <input type="radio" name="payment-format" ng-model="currency" value="INR" /> 
                                <label for="payment-format1">INR</label> 
                                <input type="radio" name="payment-format" ng-model="currency" value="USD" />
                                <label for="payment-format2">USD</label>
                            </section>`);
        })
        jQuery('.reason').on('change', 'input:radio[name="payment-format"]', function() {
            if (jQuery('input:radio[name="payment-format"]:checked').val() == 'INR') {
                // jQuery(jQuery('input:radio[name="payment-format"]:checked')).parent().parent(".reason").append(`
                //             <section class="payment-cycle" >
                //                 <b>Donation Type</b><br />
                //                 <input type="radio" id="payment-cycle1" name="payment-cycle" value="Once" /> 
                //                 <label for="payment-cycle1">Once</label>
                //                 <input type="radio" id="payment-cycle2" name="payment-cycle" value="Monthly" /> 
                //                 <label for="payment-cycle2">Monthly</label>
                //             </section>`);
                jQuery("#razorpay-details").show();
                jQuery("#recurring-input-div").hide();
                jQuery("#recurring-input").attr('required', false);
                jQuery("#donatebtn").hide();
                jQuery("#dollar-amounts").hide();
            }
            if (jQuery('input:radio[name="payment-format"]:checked').val() == 'USD') {
                jQuery("#dollar-amounts").show();
                jQuery("#donatebtn").show()
                jQuery("#razorpay-details").hide();
                jQuery("#recurring-input-div").hide();
                jQuery("#recurring-input").hide();
                jQuery('input[name="payment-cycle"]').prop('checked', false);
                jQuery(".payment-cycle").hide();
                // jQuery('input[name="payment-format"]').prop('checked', false);
                // jQuery(".payment-format").hide();
            }
        });
        jQuery('.reason').on('change', 'input:radio[name="payment-cycle"]', function() {
            if (jQuery('input:radio[name="payment-cycle"]:checked').val() == 'Once') {
                jQuery("#razorpay-details").show();
                jQuery("#recurring-input-div").hide();
                jQuery("#recurring-input").attr('required', false);
            }
            if (jQuery('input:radio[name="payment-cycle"]:checked').val() == 'Monthly') {
                jQuery("#razorpay-details").show();
                jQuery("#recurring-input-div").show();
                jQuery("#recurring-input").attr('required', true);
            }
        });
        // jQuery("#reference-dropdown").change(function() {
        //     if(jQuery("#reference-dropdown").val()===''){
        //         jQuery("#reference-input").hide();
        //         jQuery("#reference").val('');
        //     } else if(jQuery("#reference-dropdown").val()==='Other'){
        //         jQuery("#reference-input").show();
        //         jQuery("#reference").val(jQuery("#reference-input").val());
        //     } else {
        //         jQuery("#reference-input").hide();
        //         jQuery("#reference").val(jQuery("#reference-dropdown").val());
        //     }
        // })
        jQuery("#reference-input").change(function() {
            jQuery("#reference").val(jQuery("#reference-input").val());
        })
        jQuery("#iqv1").click(function() {
            jQuery("#input_amount").val(2000);
        })
        jQuery("#iqv2").click(function() {
            jQuery("#input_amount").val(4000);
        })
        jQuery("#iqv3").click(function() {
			jQuery("#input_amount").val("");
            jQuery("#input_amount").focus();
        })

        jQuery("#dollar-iqv1").click(function() {
            jQuery("#dollar_input_amount").val(50);
        })
        jQuery("#dollar-iqv2").click(function() {
            jQuery("#dollar_input_amount").val(100);
        })
        jQuery("#dollar-iqv3").click(function() {
            jQuery("#dollar_input_amount").val(150);
        })
		jQuery("#dollar-iqv4").click(function() {
			jQuery("#dollar_input_amount").val("");
            jQuery("#dollar_input_amount").focus();
        })
    });
</script>
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script>
    // Checkout details as a json
    $("#rzp-button").click(function(e) {
        e.preventDefault();
        var cause = $('input:radio[name="item_name"]:checked').val();
        var currency = $(".input_currency_format").val();
        var amount = $(".input_amount").val();
        var email = $(".input_email").val();
        var zip = $(".input_zip").val();
        var pan = $(".input_pan").val();
        var address = $(".input_address").val();
        var fullname = $(".input_fullname").val();
        var mobile = $(".input_mobile").val();
        var reference = $("#reference").val();
        if ($(".input_tenure").val() != '') {
            var tenure = $(".input_tenure").val();
        } else {
            var tenure = 1;
        }
        var donation_type = $('input:radio[name="payment-cycle"]:checked').val();
        if (cause != '' && currency != '' && amount != '' && email != '' && zip != '' && address != '' && fullname != '' && mobile != '' && donation_type != '') {
            $("#fill_message").hide();
            $.post(
                "/create_order", {
                    cause: cause,
                    currency: currency,
                    amount: amount,
                    email: email,
                    zip: zip,
                    pan: pan,
                    address: address,
                    fullname: fullname,
                    mobile: mobile,
                    tenure: tenure,
                    donation_type: donation_type,
                    reference: reference
                },
                function(result) {
                    pay(result);
                }
            );
        } else {
            $("#fill_message").show();
        }
    });

    function pay(json_result) {
        var options = JSON.parse(json_result);
        // console.log(options)
        /**
         * The entire list of Checkout fields is available at
         * https://docs.razorpay.com/docs/checkout-form#checkout-fields
         */
        options.handler = function(response) {
            document.getElementById("razorpay_payment_id").value = response.razorpay_payment_id;
            document.getElementById("razorpay_signature").value = response.razorpay_signature;
            document.razorpayform.submit();
        };

        // Boolean whether to show image inside a white frame. (default: true)
        // options.theme.image_padding = false;

        options.modal = {
            ondismiss: function() {
                console.log("This code runs when the popup is closed");
            },
            // Boolean indicating whether pressing escape key
            // should close the checkout form. (default: true)
            escape: true,
            // Boolean indicating whether clicking translucent blank
            // space outside checkout form should close the form. (default: false)
            backdropclose: false,
        };

        var rzp = new Razorpay(options);
        rzp.open();
    }
</script>