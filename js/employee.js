$(function(){

    $('#btnInsert').click(function(){
        console.log('Insert');

        var urlAPI = 'http://localhost:4000/Employees';
        var dataReq = {
            empCode : $('#empCode').val(),
            empName : $('#empName').val(),
            empMobile : $('#empMobile').val(),
            empEMail : $('#empEMail').val(),
        };

        jQuery.ajax({
            async: false,
            type: "POST",
            url: urlAPI,
            data: dataReq,
            dataType: "json",
            success:function (data) {
                alert("Inserted : " + data.id );
                console.log(data);
             }
         });

    });

    $('#btnUpdate').click(function(){
        console.log('Update');
    });

    $('#btnDelete').click(function(){
        console.log('Delete');
    });

    $('#btnSearch').click(function(){
        console.log('Search');
    });

});