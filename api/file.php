<script>
document.getElementById("header-menu-col").classList.add('col-md-12');
document.getElementById("header-menu-col").classList.remove('col-md-9');
</script>
<?php


function moneyFormatIndia($num) {
    $explrestunits = "" ;
    if(strlen($num)>3) {
        $lastthree = substr($num, strlen($num)-3, strlen($num));
        $restunits = substr($num, 0, strlen($num)-3); // extracts the last three digits
        $restunits = (strlen($restunits)%2 == 1)?"0".$restunits:$restunits; // explodes the remaining digits in 2's formats, adds a zero in the beginning to maintain the 2's grouping.
        $expunit = str_split($restunits, 2);
        for($i=0; $i<sizeof($expunit); $i++) {
            // creates each of the 2's group and adds a comma to the end
            if($i==0) {
                $explrestunits .= (int)$expunit[$i].","; // if is first value , convert into integer
            } else {
                $explrestunits .= $expunit[$i].",";
            }
        }
        $thecash = $explrestunits.$lastthree;
    } else {
        $thecash = $num;
    }
    return $thecash; // writes the final format where $currency is the currency symbol.
}
if(function_exists('date_default_timezone_set')) {
    date_default_timezone_set("Asia/Kolkata");
}
$servername = "localhost";
$username ="dona_nirmaan";
$password = "nirmaan@123#";
$dbname ="dona_nirmaan";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// $slug = get_query_var('pledge_name');
// $slug="shiva-korupolu-948";

$sql = "SELECT Currency, Amount FROM payments WHERE PaymentStatus='Completed' AND Cause='$cause' AND Reference='$slug'";
$datetime = date('Y-m-d H:i:s');
$site_url = "https://nirmaan.org/";
$count = 0;

$user_conn = new mysqli("localhost", "cust_registrations", "Nirmaan@123#", "cust_registrations");
if ($user_conn->connect_error) {
  die("connectin failed" . $user_conn->connect_error . "please check it");
}
$user_result = $user_conn->query("SELECT Id,Name,Email,Mobile,Target,What,Why,Image,About,Cause FROM pledge_details WHERE Slug='$slug'");
echo '<div class="conatiner" style="margin-bottom:40px">
    <div style=" width:100%; height:auto; background-color:black;">
        <div class="container">';
if ($user_result->num_rows > 0) {
  $row = $user_result->fetch_assoc();
    $name = $row["Name"];
    $what = $row["What"];
    $why = $row["Why"];
    $image = $row["Image"];
    $target = $row["Target"];
    $about = $row["About"];
}
$result = $conn->query($sql);
$total_goal = $target;
$total_amount =0;
if ($result->num_rows > 0) {
    // output data of each row
    while ($in_row = $result->fetch_assoc()) {
        if ($in_row["Currency"] === 'INR') {
            $total_amount += $in_row["Amount"];
        } else if ($in_row["Currency"] === 'USD') {
            $temp_usd_amount = $in_row["Amount"] * 76;
            $total_amount += $temp_usd_amount;
        }
    }
}
$total_percentage = ((int)$total_amount / (int)$total_goal * 100)."%";
// setlocale(LC_MONETARY, 'en_IN');
// $total_amount_in_currency = money_format('%!i', $total_amount);
// $total_goal_in_currency = money_format('%!i', $total_goal);
$total_amount_in_currency = moneyFormatIndia($total_amount);
$total_goal_in_currency = moneyFormatIndia($total_goal);
$conn->close();
?>
<style>
	#header-donation-buttons{
		display: none!important;
	}
    body {
        --total-progress: <?php echo $total_percentage; ?>;
    }

    .page-bg-title-area {
        background: url("img/banners/banner8.jpeg") no-repeat center;
        /* padding: 150px 0 90px; */
        position: relative;
    }

    .progress-bg {
        margin: 0 auto;
        width: 100%;
        height: 50px;
        border-radius: 10px;
        overflow:hidden !important;
        text-align: center;
        /* background: url("http://www.atsu.edu/stlclinic/images/progress-bar-bg.jpg") repeat; */
        -moz-box-shadow: inset 0 0 10px #ccc;
        -webkit-box-shadow: inset 0 0 10px #ccc;
        box-shadow: inset 0 0 10px #ccc;
    }


    .bgred {
        background: #f01111 !important;
    }

    .progress-bar {
        height: 50px;
        border-radius: 10px;
        float: left;
        width: 50%;
        /* fallback */
        background-color: #1c314a;
        /* Safari 4-5, Chrome 1-9 */
        background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#1c314a), to(#27425f));
        /* Safari 5.1, Chrome 10+ */
        background: -webkit-linear-gradient(top, #1c314a, #27425f);
        /* Firefox 3.6+ */
        background: -moz-linear-gradient(top, #1c314a, #27425f);
        /* IE 10 */
        background: -ms-linear-gradient(top, #1c314a, #27425f);
        /* Opera 11.10+ */
        background: -o-linear-gradient(top, #1c314a, #27425f);
    }

    h3.raised {
        color: #b2b2b2;
        margin: 14px 25px 0 50px;
        float: left;
        font-family: sans-serif;
        font-size: 1em;
        font-weight: 600;
        line-height: 50px;
        margin: 0;
        padding: 10px 0px;
        display: inline-block;
    }

    h3.goal {
        color: #b2b2b2;
        float: right;
        white-space: nowrap;
        font-family: sans-serif;
        font-size: 1em;
        font-weight: 600;
        line-height: 50px;
        margin: 0;
        padding: 10px 0px;
        display: inline-block;
    }

    .progress-padding {
        padding: 10px 3px 50px 0px;
    }

    @media screen and (max-width: 992px) {

        h3.raised,
        h3.goal {
            font-size: 0.8em;
            padding: 0px 0px;
        }

        .progress-padding {
            padding: 20px 0px 40px 0px;
        }
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    /* Firefox */

    @-moz-keyframes fadein {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    /* Safari and Chrome */

    @-webkit-keyframes fadein {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    /* Internet Explorer */

    @-ms-keyframes fadein {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @-o-keyframes fadein {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .progress-bg h3.goal {
        float: right;
        display: none;
        padding: 0 25px 0 0;
        text-align: center;
    }

    body .progress-bg div {
        -webkit-animation: progress-bar 2s ease forwards;
        -moz-animation: progress-bar 2s ease forwards;
        -o-animation: progress-bar 2s ease forwards;
        animation: progress-bar 2s ease forwards;
    }

    @-webkit-keyframes progress-bar {
        from {
            width: 0%;
        }

        to {
            width: var(--total-progress);
        }
    }

    @-moz-keyframes progress-bar {
        from {
            width: 0%;
        }

        to {
            width: var(--total-progress);
        }
    }

    @-o-keyframes progress-bar {
        from {
            width: 0%;
        }

        to {
            width: var(--total-progress);
        }
    }

    @keyframes progress-bar {
        from {
            width: 0%;
        }

        to {
            width: var(--total-progress);
        }
    }

    .sticky-container {
        display: none !important;
    }
</style>
<style>
    .page-bg-title-area {
        position: relative;
    }

    .sticky-container {
        display: none !important;
    }

    .nirmaan-color {
        color: #0aaaa0;
    }

    .nirmaan-bg-color {
        background-color: #0aaaa0;
    }

    .font-17 {
        font-size: 17px;
    }

    .font-20 {
        font-size: 20px;
    }

    .font-30 {
        font-size: 30px;
    }

    .font-35 {
        font-size: 35px;
    }

    .font-40 {
        font-size: 40px;
    }

    .font-50 {
        font-size: 50px !important;
    }

    .color-white {
        color: #fff;
    }

    .font-a {
        font-family: "Alegreya Sans", sans-serif;
    }

    .font-arial-black {
        font-family: "Arial Black", sans-serif;
    }

    .font-arial {
        font-family: "Arial", sans-serif;
    }

    .font-verdana {
        font-family: "Verdana", sans-serif;
    }

    .timer-subtext {
        font-size: 12px;
        color: darkgray;
    }

    .timer-main {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        padding: 20px 50px 20px 0px;
        font-size: 50px;
    }

    .donate-button-new {
        padding: 10px 30px;
        border-radius: 30px;
        background: #902293;
        box-shadow: 0px 0px 5px rgb(70, 70, 70);
        color: #ffffff !important;
        font-family: "Arial", sans-serif;
        font-weight: bold;
        font-size: 20px;
    }

    .register-button {
        margin-top: 100px;
        padding: 15px 30px;
        border-radius: 30px;
        color: #0aaaa0 !important;
        font-family: "Arial", sans-serif;
        font-weight: bold;
        font-size: 20px;
    }

    .register-button:hover {
        color: #fff !important;
    }

    .donate-button-new:hover {
        background: #ffffff;
        color: #ffffff !important;
    }

    .py-50 {
        padding-top: 50px;
    }

    .py-100 {
        padding: 100px 0px;
    }

    .py-150 {
        padding: 150px 0px;
    }

    .title-border::after {
        content: "";
        display: block;
        border-bottom: 7px solid orange;
        width: 15%;
        position: relative;
        bottom: -6px;
        /* your padding + border-width */
    }

    .h-20 {
        height: 20px;
    }

    .h-30 {
        height: 30px;
    }

    .h-50 {
        height: 50px;
    }

    .brand-logos {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: end;
        margin: 20px 0px;
    }

    .main-menu-area {
        background: #fff none repeat scroll 0 0;
        padding-top: 10 px;
        padding-bottom: 10 px;
        padding-left: 0 px;
        text-align: left;
    }

    .pl-30 {
        padding-left: 30px;
    }

    @media (min-width: 1300px) {
/*         .container {
            width: 1300px !important;
        } */
    }

    @media (min-width: 1200px) {
/*         .container {
            width: 1200px !important;
        } */
    }

    @media (max-width: 992px) {
/*         .container {
            width: auto !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
        } */

        .h-20-m {
            height: 20px;
        }

        .py-100 {
            padding: 50px 0px;
        }

        .brand-logos {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: end;
            margin: 20px 0px;
        }

        .timer-main {
            padding: 10px 10px 10px 10px;
            font-size: 30px;
        }

        .register-button {
            margin-top: 100px;
            padding: 10px;
            border-radius: 30px;
            color: #0aaaa0 !important;
            font-family: "Arial", sans-serif;
            font-weight: bold;
        }

        .donate-button-new {
            padding: 10px;
            border-radius: 30px;
            background: #0aaaa0;
            box-shadow: 0px 0px 10px rgb(70, 70, 70);
            color: #ffffff !important;
            font-family: "Arial", sans-serif;
            font-weight: bold;
        }

        .main-menu-area {
            text-align: center;
        }
    }

    #main {
        display: none !important;
    }
	
	

	
	@media screen and (min-width: 600px) {
  .imagebp1 {
   display:none;
	
  }
}

	
	@media screen and (max-width: 600px) {
  .imagebp2 {
   display:none;
  }
}
	
	@media screen and (min-width: 600px) {
  .parabp1 {
   display:none;
  }
}

	
	@media screen and (max-width: 600px) {
  .parabp2 {
   display:none;
  }
}
	
	

	
/* @media screen and (min-width: 600px) {
  .donationbp1 {
   display:none;
  }
} */

	
/* 		@media screen and (max-width: 600px) {
  .donationbp2 {
   display:none;
  }
} */
	
	
</style>

<style>
    
    .card{
        border:1px solid #e1600c;
        height: auto;
        background-color: white;
        /*box-shadow: 2px 2px 2px 2px;*/
        border-radius: 3%;
        padding:10px;
        margin-bottom:10px;
        
    }
    @media screen and (max-width: 600px) {
  .pad{
padding-left: 0px;
  }
  h4{
      font-size: 18px;
  }
  .pad2{
      padding-left:30px;
  }
  
  .bod{
      height:300px;
  }
  .butn{
      width:89%;
  }
  
  
}
   @media screen and (min-width: 600px) {
    
.pad2{
    padding-left:45px;
}
 .bod{
      height:277px;
  }
  .butn{
      width:94%;
  }
   }
   
   
   .font{
         font-family:'Nunito Sans', sans-serif;
         font-size:16px;
    }
   
    
</style>
<!-- Go to www.addthis.com/dashboard to customize your tools --> 
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-62cbcf1eb05b3a5e"></script>

  <script>
    // Set the date to count down to
    const countDownDate = new Date("2023-06-15").getTime();

    // Update the countdown every second
    const x = setInterval(function() {

      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the time remaining
      const distance = countDownDate - now;

      // Calculate days, hours, minutes, and seconds remaining
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById("days").innerHTML = ('0' + days).slice(-2);
      document.getElementById("hours").innerHTML = ('0' + hours).slice(-2);
      document.getElementById("minutes").innerHTML = ('0' + minutes).slice(-2);
      document.getElementById("seconds").innerHTML = ('0' + seconds).slice(-2);

      // If the countdown is finished, display a message
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
      }
    }, 1000);
  </script>

<?php

    echo '
        <div class="row font" style=" padding-top:45px; padding-bottom:45px;" >
            <div class="col-sm-2" >
                <img src='.$image.' style=" height:220px;object-fit:fill;width:100%"/>
            </div>
            <div class="col-sm-8">
                  <h1 class="font" style="color: white; font-size:30px">'.$name.'</h1>
                  <h4 style=" color:darkturquoise;">Fundraising Ends On: June 15, 2023</h4>
                <h5 style="color:darkturquoise; font-size:18px">Share on: </h5>
               <div class="addthis_inline_share_toolbox"></div>
            </div>
            
            <div class="col-sm-2 pad2" style="color:white; padding-left:17px;">
            
             <h4 style="color: #ffffff; padding-top: 5px; padding-bottom: 5px">To Support:</h4>
            <div style="padding-bottom: 10px">
              <a href="https://nirmaan.org/cycle-donation-page/?reference='.$slug.'" target="_blank"  style="display: block;  font-size: 14px; text-align:center; text-transform: capitalize ; background-color:  #33c9f3; color: white;padding:4px;" class="butn">Donate Now</a>
            </div>
            <div style="margin-bottom: 10px">
              <a href="https://nirmaan.org/rotary-registration/" target="_blank" style="display: block; text-align:center;  font-size: 14px; text-transform: capitalize; background-color:  #33c9f3; color: white;padding:4px;" class="butn">Become a Fundraiser</a>
            </div>
            </div>
        </div>
    </div>
    </div>
    
    <div class="container font" style=" border-bottom:4px solid  #902293;">
             <section class="donationbp1" >
        <div class="section-title" style="margin-top: 20px; margin-bottom: 20px">
            <h3 class="font-30" style="line-height: 40px;color: #902293;font-size:30px;" class="font">Donation Progress:</h3>
        </div>
        <div class="">
            <div class="about-image bod" >
                <div class="progress-bg">
                    <div class="progress-bar"></div>
                </div>
                <div class="clearfix"></div>
                <h3 class="raised">INR <span id="raised_amount">'.$total_amount_in_currency.' /-</span> &nbsp;raised</h3>
                <h3 class="goal">Goal: INR '.$target.'/-</h3>
                <br style="clear: both" />
                <div id="countdown">
  <span id="days" style="color: darkred;font-size:26px; font-weight:bold;"></span>
  <span style="color: darkred;font-size:19px;font-weight:bold;">Days to go until June 15</span> 
</div>
                <p>A small donation from you can change the life of the schoolgirl who gets it.Give her dreams a boost by clicking that donate button.</p>
                <br />
                <!--<div class="h-30"></div>-->
                <a href="https://nirmaan.org/cycle-donation-page/?reference='.$slug.'" class="donate-button-new" style="background:#902293;">Donate Now </a>
                <!--<a href="/rotart-donate-cycle" target="_blank" class="btn-md bo-ra-5 text-center" style="margin-top: 20px">DONATE NOW</a>-->
            </div>
        </div>
</section>
    </div>
    
   <div class="container font" >
        <div class="row" style="margin-top:50px">
        <div class="col-sm-8">
            <h6 style="color:#902293; padding:0px; font-size:28px;" class="font"> Support Compaign Page </h6>
        <div>
        <div>
            <h5 style="color:#902293; margin-top:5px; font-size:23px;" class="font">About me</h5>
            <p>'.$about.'</p>
        </div>
            <h5 style="color:#902293; margin-top:5px;font-size:23px;" class="font">What</h5>
            <p> '.$what.' </p>
        </div>
          <div>
            <h5 style="color:#902293; margin-top:5px;font-size:23px;" class="font">Why</h5>
            <p>'.$why.'</p>
        </div>
         <div>
            <h5 style="color:#902293; margin-top:5px; font-size:23px;" class="font">When</h5>
            <p>This fundraising campaign started on May 18<sup>th</sup> and will end on June 15<sup>th</sup>, 2023.</p>
        </div>
         <div>
            <h5 style="color:#902293; margin-top:5px;">How</h5>
            <p>1) Donate for the cause <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                  </svg><a href="https://nirmaan.org/cycle-donation-page/?reference='.$slug.'"> Click Here to Donate</a></p>
              <p>2) You can be our cause partner by generating the funds through pledge page as an individual fundraiser for the cause by <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                  </svg><a href="https://nirmaan.org/rotary-registration/"> Registering Here</a></p>
                  
                  <p>3) Know about campaign <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"></path>
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"></path>
                  </svg><a href="https://nirmaan.org/cycle/"> Click Here</a></p>
                  
                  
        </div>
    </div>
    <div class="col-sm-4 font" style="margin-top: 40px;">
        <div class="card"  >
        <img src="https://nirmaan.org/wp-content/uploads/2023/05/307158327_410731427911462_310166769139649652_n.jpg" style="height: 121px;width: 162px;"/>
        <h1 style="margin-top:5px;color: darkred; font-size:30px;" class="font"> About Campaign</h1>
      <h4 style="color:green">Ends on : June 15, 2023</h4>
           <p>Going to school should be a pleasure. But if your home is a distance away, walking to school can be a drudgery and worse- especially for girls. Imagine walking several miles every day to get to school with a heavy school bag on your shoulder. And the additional discomfort in summers or when it rains.</p>
    <p> A small donation from you can change the life of the school girl who gets it </p>
    <a href="https://nirmaan.org/cycle/" > <p>Click for more details....</p></a>
    
    <h4 style="margin-top:5px;color: darkred;font-size:30px;" class="font">Where</h4>
    <p> To address this issue and help reduce dropout rates, one solution is to provide bicycles, which can alleviate the dependence on transportation and increase access to education.  To achieve this, we have undertaken an initiative to donate 2300 bicycles to students across 147 schools at Guntur, Andhra Pradesh. Our aim is to raise 50L funds for this cause by June 15th.</p>
        </div>
    </div>
        </div>
         
        
            </div>
</div>

';

?>

  



 
 











