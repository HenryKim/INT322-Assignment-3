function validate(src)
            {
               if (src.phone.value.length != 10)
               {
					alert("Phone Number should be 10 digits");
					src.phone.focus();
					src.phone.select();
					return false;
                }
               else  if (parseInt(src.phone.value) != src.phone.value)
		      {
		         alert('Please enter a phone number, numbers only');
		         src.phone.focus();
		         src.phone.select();
		         return false;
               }
			   if (src.stdno.value.length != 9)
               {
                 alert("Student Number should be 9 digits");
                 src.stdno.focus();
 		         fmr1.stdno.select();
		         return false;
                }
				if( parseInt(src.wrkyr.value) < 0 || parseInt(src.wrkyr.value) > 20)
				{
					alert("Invalid year");
					src.wrkyr.focus();
					src.wrkyr.select();
					return false;	
				}
				if( src.senecaemail.value != true){
					src.senecaemail.value = src.lrnid.value + "@senecacollege.ca";
				}
				return true;
            }