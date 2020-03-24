  // Rome Tour ************************
	let rx = 0;
  let ry = 0;
  let rz = 0;
  let rp = rx+ry+rz;
  let rpr = 0;
  // Adults
	$("#Adultsbut-up-rome").on('click', ()=>{  
    // increment & set new value 
  	$("#adults-numb-rome").val( ++rx );
	});

	$("#Adultsbut-down-rome").on('click', ()=>{  	
    // decrement & set new value 
    if(rx > 0){
  		$("#adults-numb-rome").val( --rx );
    }
	});
  // 
  //Children ------------------
  $("#Childrenbut-up-rome").on('click', ()=>{  
    //  
  	$("#children-numb-rome").val( ++ry );
	});

	$("#Childrenbut-down-rome").on('click', ()=>{  	
    // 
    if(ry > 0){
  		$("#children-numb-rome").val( --ry );
    }
	});
  
  //Kids ------------------
  $("#Kidsbut-up-rome").on('click', ()=>{  
    //  
  	$("#kids-numb-rome").val( ++rz );
	});

	$("#Kidsbut-down-rome").on('click', ()=>{  	
    // 
    if(rz > 0){
  		$("#kids-numb-rome").val( --rz );
    }
	});
  
  

  $('.cobutton').click(function(){
  $("#passengers-total-rome").val(" Adults: "+rx+" children: "+ry+" Kids: "+rz); 
  });
  
  $('.cobutton').click(function(){
  rpr = (rx*85)+(ry*65)+(rz*40);
  $("#price-rome").val("Total Price:"+"€"+rpr); 
  
  document.querySelector('.rome-totalprice').innerHTML = "Total: "+"€"+rpr;

  });
  
    // number refreshing  problemfix XXXXXXXXXX
    $("#adults-numb-rome").change(function(){
  	// convert input value to number
  	const num1 = Number($(this).val());
    // if it's a number
  	if(num1){
    	// assign its value to x
    	rx = num1;
    }
  });
  $("#children-numb-rome").change(function(){
  	// convert input value to number
  	const num2 = Number($(this).val());
    // if it's a number
  	if(num2){
    	// assign its value to x
    	ry = num2;
    }
  });
  
 $("#kids-numb-rome").change(function(){
  	// convert input value to number
  	const num3 = Number($(this).val());
    // if it's a number
  	if(num3){
    	// assign its value to x
    	rz = num3;
    }
  });

//removal - rome **********
  $("#removal-rome").on('click', ()=>{  
    //  	
    rx = 0;
    ry = 0;
    rz = 0;
  	$("#adults-numb-rome").val("0");
  	$("#children-numb-rome").val("0");
  	$("#kids-numb-rome").val("0");
    $("#passengers-total-rome").val(" Adults: "+rx+" children: "+ry+" Kids: "+rz); 
    rpr = (rx*0)+(ry*0)+(rz*0);
    $("#price-rome").val("Total Price:"+"€"+rpr); 
  
    document.querySelector('.rome-totalprice').innerHTML = "Total: "+"€"+rpr;
});
//end of tour passengers
  // on input value change
