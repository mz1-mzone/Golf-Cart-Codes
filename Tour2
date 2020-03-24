  // CapeTown Tour ************************
	let cx = 0;
  let cy = 0;
  let cz = 0;
  let cp = cx+cy+cz;
  let cpr = 0;
  // Adults
	$("#Adultsbut-up-capetown").on('click', ()=>{  
    // increment & set new value 
  	$("#adults-numb-capetown").val( ++cx );
	});

	$("#Adultsbut-down-capetown").on('click', ()=>{  	
    // decrement & set new value 
    if(cx > 0){
  		$("#adults-numb-capetown").val( --cx );
    }
	});
  // 
  //Children ------------------
  $("#Childrenbut-up-capetown").on('click', ()=>{  
    //  
  	$("#children-numb-capetown").val( ++cy );
	});

	$("#Childrenbut-down-capetown").on('click', ()=>{  	
    // 
    if(cy > 0){
  		$("#children-numb-capetown").val( --cy );
    }
	});
  
  //Kids ------------------
  $("#Kidsbut-up-capetown").on('click', ()=>{  
    //  
  	$("#kids-numb-capetown").val( ++cz );
	});

	$("#Kidsbut-down-capetown").on('click', ()=>{  	
    // 
    if(cz > 0){
  		$("#kids-numb-capetown").val( --cz );
    }
	});
  
  

  $('.cobutton').click(function(){
  $("#passengers-total-capetown").val(" Adults: "+cx+" children: "+cy+" Kids: "+cz); 
  });
  
  $('.cobutton').click(function(){
  cpr = (cx*85)+(cy*65)+(cz*40);
  $("#price-capetown").val("Total Price:"+"€"+cpr); 
  
  document.querySelector('.capetown-totalprice').innerHTML = "Total: "+"€"+cpr;

  });
  
    // number refreshing  problemfix XXXXXXXXXX
    $("#adults-numb-capetown").change(function(){
  	// convert input value to number
  	const num1 = Number($(this).val());
    // if it's a number
  	if(num1){
    	// assign its value to x
    	cx = num1;
    }
  });
  $("#children-numb-capetown").change(function(){
  	// convert input value to number
  	const num2 = Number($(this).val());
    // if it's a number
  	if(num2){
    	// assign its value to x
    	cy = num2;
    }
  });
  
 $("#kids-numb-capetown").change(function(){
  	// convert input value to number
  	const num3 = Number($(this).val());
    // if it's a number
  	if(num3){
    	// assign its value to x
    	cz = num3;
    }
  });
  
//removal - capetown **********
  $("#removal-capetown").on('click', ()=>{  
    cx = 0;
    cy = 0;
    cz = 0;
  	$("#adults-numb-capetown").val("0");
  	$("#children-numb-capetown").val("0");
  	$("#kids-numb-capetown").val("0");
    $("#passengers-total-capetown").val(" Adults: "+cx+" children: "+cy+" Kids: "+cz); 
    cpr = (cx*0)+(cy*0)+(cz*0);
    $("#price-capetown").val("Total Price:"+"€"+cpr); 
  
    document.querySelector('.capetown-totalprice').innerHTML = "Total: "+"€"+cpr;  //end of tour passengers
  });
// on input value change
