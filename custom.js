$(document).ready(function(){
    
    
    function showWindow(){
        $('#main').show();
        $('html body').css('overflow','hidden');
        
        setTimeout(hideWindow,20000);
        
    }
    
    //showWindow()
    
    function hideWindow(){
    $('#main').hide();
        //on scroll
    $('html body').css('overflow','scroll');
    }
    
// auto open after 2s
    setTimeout(showWindow,5000);
    
    //close after click
    
    $("#close-btn").click(function(){
        
        hideWindow();
        
    })
})