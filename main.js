$(document).ready(function(){
    $('#email').blur(function(){
        $(this).css("border-color","")
        var emailRegxp = /^([a-zA-Z0-9_.+-])+\@(([A-Za-z0-0-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!(emailRegxp.test($(this).val()))){
        $('.error').text('請輸入有效的電子郵件');
        $(this).css("border-color","red")
      }else{
        $('.error').text('');
      }
    })
    $('#mobile').blur(function(){
        $(this).css("border-color","")
        var phone = /^09[0-9]{8}$/;
    if(!(phone.test($(this).val()))){
        $('.error1').text('請輸入有效的手機號碼');
        $(this).css("border-color","red")
    }else{
        $('.error1').text('');
    }
    })
})



$("#add").click(function () {
    var $contactName = $('#contactName').val();
    var $email = $('#email').val();
    var $mobile = $('#mobile').val();

    //清空input value
    $('#contactName').val("");
    $('#email').val("");
    $('#mobile').val("");

    //判斷輸入的欄位值不能為空值
    if($contactName == '' || $email == '' || $mobile == ''){
      alert("提醒:\r\n資料輸入不全!");
      return false; 
    } 

    //驗證電子郵件
    var emailRegxp = /^([a-zA-Z0-9_.+-])+\@(([A-Za-z0-0-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!(emailRegxp.test($email))){
      alert("請輸入有效的郵件地址");
      return false;
    }

    //驗證手機號碼
    //var phone = /^1[34578]\d{9}$/;
    var phone = /^09[0-9]{8}$/;
    if(!(phone.test($mobile))){
      alert("請輸入有效的手機號碼");
      return false;
    }

    var data = $("<tr id='myTableRow'><td><input id='update' class='btn btn-info' type='button' value='update' onclick='updateRow(this)'>&nbsp;<input id='delete' class='btn btn-danger' type='button' value='delete' onclick='deleteRow(this)'></td><td>" + $contactName +"</td><td>"+ $email+"</td><td>"+$mobile+"</td></tr>");
    $('#contactList thead').append(data);

    /*$("#contactList #update").click(function(){
        var data_update = $("<tr><td><input id='updateU' class='btn btn-info' type='button' value='update'></td><td><input id='contactNameU' type='text' value='"+$contactName+"' name ='name' required></td><td><input id='emailU' type='email' value='"+$email+"' name ='email' required></td><td><input id='mobileU' type='text' value='"+$mobile+"' name ='mobile' required></td></tr>");
        $(this).parents("tr").replaceWith(data_update);   //為甚麼不能用.html()

        var $contactNameU = $(this).parent().parent().find("td").eq(1).text();

    	var $emailU = $(this).parent().parent().find("td").eq(2).text();

    	var $mobileU = $(this).parent().parent().find("td").eq(3).text();

        console.log($contactNameU,$emailU,$mobileU);

        $("#contactList #updateU").click(function(){
            var $contactNameUU = $('#contactNameU').val();
            var $emailUU = $('#emailU').val();
            var $mobileUU = $('#mobileU').val();

        var data_update2 = $("<tr><td><input id='update' class='btn btn-info' type='button' value='update'>&nbsp;<input id='delete' class='btn btn-danger' type='button' value='delete' ></td><td>" + $contactNameUU +"</td><td>"+ $emailUU+"</td><td>"+$mobileUU+"</td></tr>");
        $(this).parents("tr").replaceWith(data_update2);
        console.log($contactNameU,$emailU,$mobileU);

        $("input[name=name]").val($contactNameUU);

    	$("input[name=email]").val($emailUU);

        $("input[name=mobile]").val($mobileUU);
        
        $("#contactList #delete").click(function () {
            $(this).parents("tr").remove();
        });
        });*/
    
       
        /* var $contactNameU = $(this).parents("tr").find("#contactNameU").val();
        var $emailU = $(this).parents("tr").find('#emailU').val();
        var $mobileU = $(this).parents("tr").find('#mobileU').val();    

        console.log($contactNameU,$emailU,$mobileU);
        var data_update_finiah = $("<tr><td><input id='updateU' class='btn btn-info' type='button' value='update'>&nbsp;<input id='delete' class='btn btn-danger' type='button' value='delete' ></td><td>" + $contactNameU +"</td><td>"+ $emailU+"</td><td>"+$mobileU+"</td></tr>");
        $('#contactList #updateU').parents("tr").replaceWith(data_update);*/

        /*$this = $('#tr').find("td");
        $this.eq(1).html(objUser.id);
        if ($('#tr').length) {
        var newHtml = '<td>' + $contactNameU + '</td>'
                + '<td>' + $emailU + '</td>'
                + '<td>' + $mobileU + '</td>';
        $('#tr').html(newHtml);
        }*/
    });

    //刪除--方法一
    //為什麼把("#contactList #delete")改成("#delete")
    /*$("#contactList #delete").click(function () {
        $(this).parents("tr").remove();
    });*/

    //刪除--方法一-2
    /*$("#my_table .remove_row").click(function () {
        $(this).parents("tr:first")[0].remove();
    });*/
    
    //刪除--點選整列的任何地方,可以刪除整列
    /*$('#myTable tr').click(function(){
        $(this).remove();
        return false;
    });*/
    
    //刪除--完全沒反應
   /*$('#contactList').on('click','.btn btn-danger',function(){
        console.log($contactName,$email,$mobile);
        $(this).parents('tr').remove();
      });*/
    
    //刪除--完全沒反應
    /*$("#delete").click(function(){         
        console.log($contactName,$email,$mobile);
        $('#contactList thead').closest ('tr').remove();
        //$('#contactList thead tr:last').remove();  ////刪除最後一列(row)
    });*/
    //$('#contactList thead').append('<tr><th>' + $contactName + '</th></tr>');
    
    


//刪除--方法二,記得在button裡加onclick='deleteRow(this)'
function deleteRow(btn) {
    //if (confirm("Are you sure want to delete thr row?"))
        $(btn).parents("tr").remove();
}

//按update進入修改
function updateRow(btn){
    //取值顯示在input裡
    var $contactName = $(btn).parent().parent().find("td").eq(1).text();
    var $email = $(btn).parent().parent().find("td").eq(2).text();
    var $mobile = $(btn).parent().parent().find("td").eq(3).text();
    console.log($contactName,$email,$mobile);

    var data_update = $("<tr><td><input id='updateU' class='btn btn-info' type='button' value='update' onclick='updateEnd(this)'></td><td><input id='contactNameU' type='text' value='"+$contactName+"' name ='name' required></td><td><input id='emailU' type='email' value='"+$email+"' name ='email' required></td><td><input id='mobileU' type='text' value='"+$mobile+"' name ='mobile' required></td></tr>");
    $(btn).parents("tr").replaceWith(data_update);   //為甚麼不能用.html()

       /* var $contactNameU = $(btn).parent().parent().find("td").eq(1).text();

    	var $emailU = $(btn).parent().parent().find("td").eq(2).text();

        var $mobileU = $(btn).parent().parent().find("td").eq(3).text();
        
        console.log($contactNameU,$emailU,$mobileU);*/

        //console.log($contactNameU,$emailU,$mobileU);
    
}

//修改
function updateEnd(btn){
            //取值
            var $contactNameUU = $('#contactNameU').val();
            var $emailUU = $('#emailU').val();
            var $mobileUU = $('#mobileU').val();

            //驗證空值
            if($contactNameUU == '' || $emailUU == '' || $mobileUU == ''){
                alert("提醒:\r\n資料輸入不全!");
                return false; 
              }

            //驗證電子郵件
            var emailRegxp = /^([a-zA-Z0-9_.+-])+\@(([A-Za-z0-0-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!(emailRegxp.test($emailUU))){
            alert("請輸入有效的郵件地址");
            return false;
            }

            //驗證手機號碼
            //var phone = /^1[34578]\d{9}$/;
            var phone = /^09[0-9]{8}$/;
            if(!(phone.test($mobileUU))){
            alert("請輸入有效的手機號碼");
            return false;
            }  

        var data_update2 = $("<tr><td><input id='update' class='btn btn-info' type='button' value='update' onclick='updateRow(this)'>&nbsp;<input id='delete' class='btn btn-danger' type='button' value='delete' onclick='deleteRow(this)'></td><td>" + $contactNameUU +"</td><td>"+ $emailUU+"</td><td>"+$mobileUU+"</td></tr>");
        $(btn).parents("tr").replaceWith(data_update2);
        console.log($contactNameUU,$emailUU,$mobileUU);


       /* $("input[name=name]").val($contactNameUU);

    	$("input[name=email]").val($emailUU);

        $("input[name=mobile]").val($mobileUU);*/

} 


//$('#add').on('click', clickHandler);

/*function clickHandler() {
    $('#contactList thead').append('<tr><th>' + $contactName + '</th></tr>');
    //$('#contactList thead').append('<tr><th>$contactName</th></tr>');
}*/
