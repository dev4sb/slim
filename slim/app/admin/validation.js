$(document).ready(function(){
   view_record();
   get_record();
   update_record();  
  
  
   $("#form-signup").validate({
     rules:{
       firstname:'required',
       lastname:'required',
       email:{
         required:true,
         email:true
       },
       dob:'required',
       gender:'required',
       hobby:'required',
       education:'required',
       description:'required',
       //profile:'required'
     },
     messages:{
       firstname:"Please enter your firstname ",
       lastname:"Please enter your lastname",
       email: "Please enter a valid email address",
       dob: "Please enter your Birth Date",
       gender: "Please select your Gender",
       hobby: "Please select your Hobby",

       education: "Please select your Education",

       description: "Please enter your Description",

       //profile: "Please select your Profile"
     },

     submitHandler: function(form) {

      var pimage = document.getElementById('profile').files[0];
     var UserData = new FormData();
     UserData.append('type', 'SignUp');
     UserData.append('data', Bind_Data());
     UserData.append('pimage', pimage);
    
    $.ajax({
  url: "http://localhost/slim/slim/app/src/public/insert",
  type: "POST",
   data: UserData,
         contentType: false,
         processData: false,
         success: function (data, textStatus, jqXHR){
    $('#modal').modal('hide');
    $('#success').show('fade');
    setTimeout(function(){
      $('#success').hide('fade');
    },3000);
    view_record();
    var dataResult = JSON.parse(dataResult);
    console.log(dataResult)
    if(dataResult.statusCode==200){
      $('#modal').modal('hide');
      view_record();
    }
    else if(dataResult.statusCode==201){
      alert("Error occured !");
    }
    
  }
});
      }
      
    });

     
function Bind_Data()
{
 let data = {};
 let hb = [];
 $('input:checkbox[name=hobby]:checked').each(function () {
     hb.push($(this).val());
 });
 data['id']=$('#id').val();
 data['firstname'] = $('#firstname').val();
 data['lastname'] = $('#lastname').val();
 data['email'] = $('#email').val();
 data['dob'] = $('#dob').val();
 data['gender'] = $('input:radio[name=gender]:checked').val();
 data['hobby'] = hb;
 data['education'] = $('#education').val();

 data['description'] = $('#description').val();
 //data['profile']=$('#profile').val();
return JSON.stringify(data);
}

  
    


   $(document).on('click', '.delete', function(){  
        var id=$(this).data("id3");  
        if(confirm("Are you sure you want to delete this?"))  
        {             

             $.ajax({  
                  url:"http://localhost/slim/slim/app/src/public/delete",  
                  method:"POST",  
                  data:{id:id},  
                 cache:false,  
                  success:function(data){
                   $('#danger').show('fade');
                   setTimeout(function(){
                    $('#danger').hide('fade');
                   },3000);
                   view_record();  
                   var data = JSON.parse(data);
                   if (data.statusCode==200) {
                   
                   }
                   else if(data.statusCode==201)
                   {
                     alert('Error occured!!');
                   }
                           
                  }  
             });  
        }  
   }); 

 
function view_record(page)
{
$.ajax({
 url:'http://localhost/slim/slim/app/src/public/view',
 method:'POST',
 data:{page:page},
 success:function(data)
 {
   data = $.parseJSON(data);
   if(data.statusCode==200)
   {
     $('#table').html(data.html); 
   }
 }
})
}



$(document).on('click','.pagination_link',function(){
var page = $(this).attr('id');
//console.log(page);
view_record(page);
});

function get_record()
{
  $(document).on('click','#btn_edit',function(){
    var id = $(this).attr('data-id2');
    
    $.ajax(
    {
      url:'http://localhost/slim/slim/app/src/public/get',
      method :'post',
      data:{id:id},
      dataType:'JSON',
      success:function(data)
      {
        $('#id').val(data['id']);
        $('#firstname').val(data['Firstname']);
        $('#lastname').val(data['Lastname']);
        $('#email').val(data['Email']);
        $('#dob').val(data['DOB']);
        $('#description').val(data['Description']);
        //$('#Profile').val(data['Profile']);
       
        $("#education").val(data['Education']);
        $('#bn_update').show();
        $('#sub').hide();
        $('#modal').modal('show');
      
        var gen = data['Gender'];
        console.log(gen);
        $("input[name=gender][value="+ gen +"]").prop('checked',true);
        var hob = data['Hobby'];
        var arr= hob.split(",");
        console.log(arr);
        for(var j=0;j<arr.length;j++)
        {
          
          $("input[name=hobby][value="+ arr[j] +"]").attr('checked',true);
          console.log(arr[j]);
        
        }
       
       

      }
    })
  })
}


function update_record()
{
$(document).on('click','#bn_update',function()
{
  var pimage = document.getElementById('profile').files[0];
  var UserData = new FormData();
  UserData.append('type', 'SignUp');
  UserData.append('data', Bind_Data());
  UserData.append('pimage', pimage);
$.ajax(
{
url : 'http://localhost/slim/slim/app/src/public/update',
method:'POST',
data: UserData,
      contentType: false,
      processData: false,
      success: function (data, textStatus, jqXHR)
{
   $('#modal').modal('hide');
   $('#update').show('fade');
                 setTimeout(function(){
                  $('#update').hide('fade');
                 },3000);
   view_record();
}
})


})


}





$(document).on('click','#select_all',function(){
 $(".std_checkbox").prop("checked",this.checked);
  $('#delete').show('fade');
});

$(document).on('click','.std_checkbox',function(){
 if($('.std_checkbox:checked').length==$('.std_checkbox').length){
   $('#select_all').prop('checked',true);
  
 }
 else
 {
   $('#select_all').prop('checked',false);
    $('#delete').show('fade');
 }
});

$(document).on('click','#delete',function(){

 var post_arr = [];

 // Get checked checkboxes
 $('#table input[type=checkbox]').each(function() {
   if ($(this).is(":checked")) {
     var id = this.id;
     var splitid = id.split('_');
     var postid = splitid[1];

     post_arr.push(postid);
     
   }
 });

 if(post_arr.length > 0){

     var isDelete = confirm("Do you really want to delete records?");
     if (isDelete == true) {
        // AJAX Request
        $.ajax({
           url: 'http://localhost/slim/slim/app/src/public/deleteall',
           type: 'POST',
           data: { post_id: post_arr},
           success: function(response){
             $('#danger').show('fade');
                   setTimeout(function(){
                    $('#danger').hide('fade');
                   },3000);
              view_record();
           }
        });
     } 
 } 
});


$(document).on("keyup","#search_param",function(){
  var search_param = $("#search_param").val();
  $.ajax({
    url:'http://localhost/slim/slim/app/src/public/search',
    type:'POST',
    data:{search_param:search_param},
    success:function(data){
       $('#table').html(data); 
    }
  });
});

///sort

 $(document).on("click",".sort",function(){
   
   var sort = $(this).attr("id");
   var column_name = $(this).data("name");

   $.ajax({
    url:'http://localhost/slim/slim/app/src/public/view',
    type:'POST',
    data:{column_name:column_name,sort:sort},
    success:function(data){
      data = $.parseJSON(data);
     $('#table').html(data.html); 
    }
   });
 });


 //LOGIN

 $(document).on("click","#login",function(){
  var email = $('.email').val();
  var password = $('#password').val();
 // console.log(email);
 $.ajax({
  url:'http://localhost/slim/slim/app/src/public/login',
  type:'POST',
  data:{email:email,password:password},
  success:function(data){
    var data = JSON.parse(data);
    if (data.statusCode==200) {
      window.location = "index.php";
    }
    else if(data.statusCode==201)
    {
      $('#danger').show('fade');
                   setTimeout(function(){
                    $('#danger').hide('fade');
                   },3000);
    }
  }
 });
 });

 //Logout

 $(document).on("click","#logout",function(){
      $.ajax({
        url:'http://localhost/slim/slim/app/src/public/logout',
        type:'POST',
        data:{},
        success:function(data)
        {
          window.location = "form.php";
        }
      });

 });

});

