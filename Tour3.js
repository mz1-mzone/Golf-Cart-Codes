  // Vatican Tour ************************
	let vx = 0;
  let vy = 0;
  let vz = 0;
  let vp = vx+vy+vz;
  let vpr = 0;
  // Adults
	$("#Adultsbut-up-vatican").on('click', ()=>{  
    // increment & set new value 
  	$("#adults-numb-vatican").val( ++vx );
	});

	$("#Adultsbut-down-vatican").on('click', ()=>{  	
    // decrement & set new value 
    if(vx > 0){
  		$("#adults-numb-vatican").val( --vx );
    }
	});
  // 
  //Children ------------------
  $("#Childrenbut-up-vatican").on('click', ()=>{  
    //  
  	$("#children-numb-vatican").val( ++vy );
	});

	$("#Childrenbut-down-vatican").on('click', ()=>{  	
    // 
    if(vy > 0){
  		$("#children-numb-vatican").val( --vy );
    }
	});
  
  //Kids ------------------
  $("#Kidsbut-up-vatican").on('click', ()=>{  
    //  
  	$("#kids-numb-vatican").val( ++vz );
	});

	$("#Kidsbut-down-vatican").on('click', ()=>{  	
    // 
    if(vz > 0){
  		$("#kids-numb-vatican").val( --vz );
    }
	});
  
  

  $('.cobutton').click(function(){
  $("#passengers-total-vatican").val(" Adults: "+vx+" children: "+vy+" Kids: "+vz); 
  });
  
  $('.cobutton').click(function(){
  vpr = (vx*85)+(vy*65)+(vz*40);
  $("#price-vatican").val("Total Price:"+"€"+vpr); 
  
  document.querySelector('.vatican-totalprice').innerHTML = "Total: "+"€"+vpr;

  });
  
    // number refreshing  problemfix XXXXXXXXXX
    $("#adults-numb-vatican").change(function(){
  	// convert input value to number
  	const num1 = Number($(this).val());
    // if it's a number
  	if(num1){
    	// assign its value to x
    	vx = num1;
    }
  });
  $("#children-numb-vatican").change(function(){
  	// convert input value to number
  	const num2 = Number($(this).val());
    // if it's a number
  	if(num2){
    	// assign its value to x
    	vy = num2;
    }
  });
  
 $("#kids-numb-vatican").change(function(){
  	// convert input value to number
  	const num3 = Number($(this).val());
    // if it's a number
  	if(num3){
    	// assign its value to x
    	vz = num3;
    }
  });
  $("#removal-vatican").on('click', ()=>{  
    vx = 0;
    vy = 0;
    vz = 0;
  	$("#adults-numb-vatican").val("0");
  	$("#children-numb-vatican").val("0");
  	$("#kids-numb-vatican").val("0");
    $("#passengers-total-vatican").val(" Adults: "+vx+" children: "+vy+" Kids: "+vz); 
    vpr = (vx*0)+(vy*0)+(vz*0);
    $("#price-vatican").val("Total Price:"+"€"+vpr); 
  
    document.querySelector('.vatican-totalprice').innerHTML = "Total: "+"€"+vpr;  //end of tour passengers
  });
  //end of tour passengers
  // on input value change
