import $ from "jquery";
$.ajax({
    method: 'POST',
    contentType: 'application/json',
    url: '/ap/consigner/QrCode/entrustInfo',
    data: JSON.stringify({
        id: 1,
    }),
}).then(function(res){
});

