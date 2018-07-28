<?php

if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }
    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
	}
                $user = $_POST['username'];
               // $user = 'gsspsrin';
                $pass = $_POST['password'];
               // $pass = 'girijqq1@';
				if (preg_match ('/[^a-z]/i', $user)) {

	list($domain, $user) = split('[/\]', $user);
}

                $url = "http://webservices.flextronics.com/FlexAD/V1/FlexAD.aspx?filter=(samaccountname=$user)";

                //echo 'Step 1....';
                //echo "<br>";
                //echo $user;
                //echo "<br>";
                //echo $pass;
                //echo "<br>";

    $result =          file($url);

    if(sizeof($result) != 0)
    {
        foreach($result as $val) {
            $one_liner = rtrim($val, "\n");
        }

    }
    $objDOM = new DOMDocument();
    $objDOM->loadXML($one_liner);


	 for ($i=0; $i<$objDOM->getElementsByTagName("displayname")->length; $i++){

            $records['displayname'] = $objDOM->getElementsByTagName("displayname")->item($i)->nodeValue;
            //$records['title'] = $objDOM->getElementsByTagName("title")->item($i)->nodeValue;
            $records['department'] = $objDOM->getElementsByTagName("department")->item($i)->nodeValue;
             //$records['telephonenumber'] = $objDOM->getElementsByTagName("telephonenumber")->item($i)->nodeValue;
            // $records['mobile'] = $objDOM->getElementsByTagName("mobile")->item($i)->nodeValue;
            $records['mail'] = $objDOM->getElementsByTagName("mail")->item($i)->nodeValue;



            $value[] = $records;


}

	//echo $records['4'];













    $distinguishedName = $objDOM->getElementsByTagName("distinguishedname")->item(0)->nodeValue;

               // echo 'Step 2.... After parse';
                //echo "<br>";


				$val=strchr($distinguishedName,"OU=");
				$val2 = substr($val, 19);
			    $val3=strpos($val2, ",DC" );
				$val4 = substr_replace($val2,"",$val3);

				$trim1 = strchr($distinguishedName,"DC=");
                $trim2 = substr($trim1, 3);
                $commaPos = strpos($trim2, ",DC" );
                $trim3 = substr_replace($trim2,"",$commaPos);
                //echo $trim3;
                //echo "<br>";

                if($trim3 <> null)
                {
                                $url = "http://webservices.flextronics.com/FlexAD/V1/FlexAD.aspx?username=$user&password=$pass&domain=$trim3&method=validateuser";
                                $result =  file($url);

                                //echo 'Step 3....';
                                //echo "<br>";
                                if(sizeof($result) != 0)
                                {
                                                foreach($result as $val) {
                                                                $one_liner = rtrim($val, "\n");
                                                }

                                }

                                //echo 'Step 4....';
                                //echo "<br>";
                }
$objDOM = new DOMDocument();
    $objDOM->loadXML($one_liner);

$ValidateUser = $objDOM->getElementsByTagName("ErrorNumber")->item(0)->nodeValue;




                               if($ValidateUser=="0")
							   {
								   $master['files']=array();
								   $rows = array();
								   $rows['name'] = $records['displayname'];
								   $rows['country']=$val4;
								   $rows['region']=$trim3;
								   $rows['status']='loginsuccess';
								   array_push($master["files"], $rows);
								   echo  json_encode($master);
							   }

								else
								{
									$master['files']=array();
									$rows = array();
									$rows['status']='loginfailure';
									array_push($master["files"], $rows);
								    echo  json_encode($master);
								}




?>
