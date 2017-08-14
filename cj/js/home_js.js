var home_row=$('.hom_news').find('div.row').size();

function imgrun(){
  
  if(home_row==1){
    $('.hom_news .row:eq(0) .col-xs-4:first-child').velocity({rotateY: "180deg"},{
      duration: 2400,
      complete:function(){
        $('.hom_news .row:eq(0) .col-xs-4:first-child').velocity({rotateY: "360deg"},{
          duration: 2400,
          complete:function(){
            imgrun();
          }
        });
        
      }
    });
    
  };// home_row==1
  
  
  
  
  if(home_row==2){
    $('.hom_news .row:eq(0) .col-xs-4:first-child').velocity({rotateY: "180deg"},{
      duration: 2400,
      complete:function(){
        
        $('.hom_news .row:eq(1) .col-xs-4:first-child').velocity({rotateY: "180deg"},{
          duration: 2400,
          complete:function(){
            
            $('.hom_news .row:eq(0) .col-xs-4:first-child').velocity({rotateY: "360deg"},{
              duration: 2400,
              complete:function(){
                
                $('.hom_news .row:eq(1) .col-xs-4:first-child').velocity({rotateY: "360deg"},{
                  duration: 2400,
                  complete:function(){
                    imgrun();
                  }
                });
              }
            });
          }
        });
      }
    });
    
  }   //2
  
  
  
  if(home_row==3){
    $('.hom_news .row:eq(0) .col-xs-4:first-child').velocity({rotateY: "180deg"},{
      duration: 2400,
      complete:function(){
        
        $('.hom_news .row:eq(1) .col-xs-4:first-child').velocity({rotateY: "180deg"},{
          duration: 2400,
          complete:function(){
            
            $('.hom_news .row:eq(2) .col-xs-4:first-child').velocity({rotateY: "180deg"},{
              duration: 2400,
              complete:function(){
                $('.hom_news .row:eq(0) .col-xs-4:first-child').velocity({rotateY: "360deg"},{
                  duration: 2400,
                  complete:function(){
                    
                    $('.hom_news .row:eq(1) .col-xs-4:first-child').velocity({rotateY: "360deg"},{
                      duration: 2400,
                      complete:function(){
                        $('.hom_news .row:eq(2) .col-xs-4:first-child').velocity({rotateY: "360deg"},{
                          duration: 2400,
                          complete:function(){
                            imgrun();
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });
    
    
  }   //3
  
  
  
  
  if(home_row==4){
    $('.hom_news .row:eq(0) .col-xs-4:first-child').velocity({rotateY: "180deg"},{
      duration: 2400,
      complete:function(){
        
        $('.hom_news .row:eq(1) .col-xs-4:first-child').velocity({rotateY: "180deg"},{
          duration: 2400,
          complete:function(){
            
            $('.hom_news .row:eq(2) .col-xs-4:first-child').velocity({rotateY: "180deg"},{
              duration: 2400,
              complete:function(){
                $('.hom_news .row:eq(3) .col-xs-4:first-child').velocity({rotateY: "180deg"},{
                  duration: 2400,
                  complete:function(){
                    
                    
                    $('.hom_news .row:eq(0) .col-xs-4:first-child').velocity({rotateY: "360deg"},{
                      duration: 2400,
                      complete:function(){
                        
                        $('.hom_news .row:eq(1) .col-xs-4:first-child').velocity({rotateY: "360deg"},{
                          duration: 2400,
                          complete:function(){
                            $('.hom_news .row:eq(2) .col-xs-4:first-child').velocity({rotateY: "360deg"},{
                              duration: 2400,
                              complete:function(){
                                $('.hom_news .row:eq(3) .col-xs-4:first-child').velocity({rotateY: "360deg"},{
                                  duration: 2400,
                                  complete:function(){
                                    $.Velocity.hook($('.hom_news .row .col-xs-4:first-child'),"rotateY","0deg");
                                    imgrun()
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                    
                    
                    
                  }
                });
              }
            });
          }
        });
      }
    });
    
    
  }  //home_row==4
}  //imgrun()






$.Velocity.hook($(".hom_news"),"translateY","-1000px");
$.Velocity.hook($(".hom_top"),"translateY","-1000px");
$.Velocity.hook($("#wrapper"),"translateY","-1000px");

$(window).load(function(){
  $('body').css({visibility:'visible'});
  $('.hom_news .row .col-xs-4:first-child a:nth-child(2) img').css({height:$('.hom_news .row .col-xs-4:first-child a:nth-child(1) img').height()});
  $(".hom_news").velocity({translateY: "0px"},{ 
    duration: 1000,
    complete: function(){
      $('.hom_top').velocity({translateY: "0px"},{
        duration: 800,
        complete:function(){
          $('#wrapper').velocity({translateY: "0px"},{
            duration: 700,
            complete:function(){ imgrun() }
          });
        }
      });
    } 
  });
});
