var num = 100;

for(i = 1; i<=num; i++)
	{
		if(i % 3 == 0 && i % 5 == 0 ){
			document.write("Fizz - Buzz");
			}
		 else if(i % 3 == 0) {
			document.write("Fizz");
		}
		else if(i % 5 == 0) {
			document.write("Buzz");
		} else {
			document.write(i);
		}
		document.write("<br>");
		
	}

