<?php

                $user = $_POST['username'];
               

                
if (preg_match ('/[^a-z]/i', $user)) {
    
	list($domain, $user) = split('[/\]', $user);
}
                $url = "http://webservices.flextronics.com/FlexAD/V1/FlexAD.aspx?filter=(samaccountname=$user)";
              
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

    $distinguishedName = $objDOM->getElementsByTagName("distinguishedname")->item(0)->nodeValue;
   
   $val=strchr($distinguishedName,"OU=");
				$val2 = substr($val, 19);
			    $val3=strpos($val2, ",DC" );
				$val4 = substr_replace($val2,"",$val3);

				$trim1 = strchr($distinguishedName,"DC=");
                $trim2 = substr($trim1, 3);
                $commaPos = strpos($trim2, ",DC" );
                $trim3 = substr_replace($trim2,"",$commaPos);

								$master['files']=array();
								   $rows = array();
								   $rows['name'] = $records['displayname'];
								   $rows['country']=$val4;
								   $rows['region']=$trim3;
								   array_push($master["files"], $rows);
								   echo  json_encode($master);

?>