
// // LAG A

$.fx.speeds.xslow = 2000;
$.fx.speeds.xxslow = 4000;




$("#pop1").delay(500).fadeIn("xslow").delay(3500).fadeOut('xslow');
$("#pop2").delay(10500).fadeIn("xslow").delay(3500).fadeOut('xslow');
$("#pop3").delay(17500).fadeIn("xslow").delay(3500).fadeOut('xslow');
$("#pop4").delay(25500).fadeIn("xslow").delay(3500).fadeOut('xslow');


var time_id;

$("#pop1").click(
function () {
    if (time_id) {
        clearTimeout(time_id);
    }
    time_id = setTimeout(function () {
        $("#pop1").stop(true, true).fadeOut('medium');
    }, 100);
});

$("#pop2").click(
function () {
    if (time_id) {
        clearTimeout(time_id);
    }
    time_id = setTimeout(function () {
        $("#pop2").stop(true, true).fadeOut('medium');
    }, 100);
});

$("#pop3").click(
function () {
    if (time_id) {
        clearTimeout(time_id);
    }
    time_id = setTimeout(function () {
        $("#pop3").stop(true, true).fadeOut('medium');
    }, 100);
});

$("#pop4").click(
function () {
    if (time_id) {
        clearTimeout(time_id);
    }
    time_id = setTimeout(function () {
        $("#pop4").stop(true, true).fadeOut('medium');
    }, 100);
});


$(document).ready(function(){
    $(".kat-trigger1").click(function(){
        $(".blackbox1").fadeIn("slow").delay(7000).fadeOut('slow');
        $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
    });
    $(".blackbox1").click(function(){
        $(".blackbox1").fadeOut();
});
});


var time_id;

$(".kat-trigger2").hover(
function () {
    if (time_id) {
        clearTimeout(time_id);
    }
    time_id = setTimeout(function () {
        $(".blackbox2").stop(true, true).fadeIn('slow');
        $(".kat1").stop(true, true).fadeIn('slow');
    }, 250);
}, function () {
    if (time_id) {
        clearTimeout(time_id);
    }
    time_id = setTimeout(function () {
        $(".blackbox2").stop(true, true).fadeOut('slow');
    }, 100);
});


var time_id;

$(".kat-trigger3").hover(
function () {
    if (time_id) {
        clearTimeout(time_id);
    }
    time_id = setTimeout(function () {
        $(".blackbox3").stop(true, true).fadeIn('slow');
        $(".kat1").stop(true, true).fadeIn('slow');
    }, 250);
}, function () {
    if (time_id) {
        clearTimeout(time_id);
    }
    time_id = setTimeout(function () {
        $(".blackbox3").stop(true, true).fadeOut('slow');
    }, 100);
});


$(document).ready(function(){
    $(".kat-trigger4").click(function(){
        $("#xa1").fadeIn("fast");
        $("#xa2").fadeIn("slow");
        $("#xa3").fadeIn("medium");
        $("#xa4").fadeIn("fast");
        $("#xa5").fadeIn("fast");
        $("#a7").fadeOut("slow");
    });
    $("#xa1").click(function(){
        $("#xa1").fadeOut("fast");
          $("#euro-xa1").fadeIn("slow");
});
    $("#xa2").click(function(){
        $("#xa2").fadeOut("fast");
          $("#euro-xa2").fadeIn("slow");
});
    $("#xa3").click(function(){
                $("#euro-xa3").fadeIn("slow");
        $("#xa3").fadeOut("fast");

});
    $("#xa4").click(function(){
                $("#euro-xa4").fadeIn("slow");
        $("#xa4").fadeOut("fast");

});
    $("#xa5").click(function(){
        $("#xa5").fadeOut("slow");
          $("#euro1").fadeIn("slow");
          $("#euro2").fadeIn("slow");
          $("#euro3").fadeIn("slow");
          $("#euro4").fadeIn("slow");

        $(".blackbox4").fadeIn("slow").delay(7000).fadeOut('slow');
          $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
      });
});


$(document).ready(function(){
    $(".kat-trigger5").click(function(){
        $("#xa6").fadeIn("fast");
        $("#xa7").fadeIn("slow");
        $("#xa8").fadeIn("medium");
        $("#xa9").fadeIn("fast");        $("#xa10").fadeIn("fast");
        $("#xa11").fadeIn("slow");
        $("#xa12").fadeIn("medium");
        $("#xa13").fadeIn("fast");
        $("#a2").fadeOut("slow");
    });
    $("#xa6").click(function(){
        $("#xa6").fadeOut("fast");
          $("#euro-xa6").fadeIn("slow");
});
    $("#xa7").click(function(){
        $("#xa7").fadeOut("fast");
          $("#euro-xa7").fadeIn("slow");
});
    $("#xa8").click(function(){
        $("#xa8").fadeOut("fast");
          $("#euro-xa8").fadeIn("slow");
});
    $("#xa9").click(function(){
        $("#xa9").fadeOut("fast");
          $("#euro-xa9").fadeIn("slow");
});
    $("#xa10").click(function(){
        $("#xa10").fadeOut("slow");
          $("#euro5").fadeIn("slow");
          $("#euro6").fadeIn("slow");
          $("#euro7").fadeIn("slow");
          $("#euro8").fadeIn("slow");

        $(".blackbox4").fadeIn("slow").delay(7000).fadeOut('slow');
        $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
      });
  $("#xa11").click(function(){
      $("#xa11").fadeOut("fast");
        $("#euro-xa11").fadeIn("slow");
});
$("#xa12").click(function(){
    $("#xa12").fadeOut("fast");
      $("#euro-xa12").fadeIn("slow");
});
$("#xa13").click(function(){
    $("#xa13").fadeOut("fast");
      $("#euro-xa13").fadeIn("slow");
});
});


// // LAG B


$(document).ready(function(){
    $(".kat-triggerb1").click(function(){
        $("#xb1").fadeIn("slow");
        $("#xb2").fadeIn("slow");
        $("#xb22").fadeIn("slow");

        $(".blackbox5").fadeIn("slow").delay(7000).fadeOut('slow');
          $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
    });
    $("#xb1").click(function(){
        $("#xb1").fadeOut("fast");
          $("#euro-xb1").fadeIn("slow");
        });
    $("#xb2").click(function(){
        $("#xb2").fadeOut("fast");
          $("#euro-xb2").fadeIn("slow");
        });
    $("#xb22").click(function(){
        $("#xb22").fadeOut("fast");
          $("#euro-xb22").fadeIn("slow");
        });
});


$(document).ready(function(){
    $(".kat-triggerb2").click(function(){
        $("#xb6").fadeIn("slow");
        $("#xb4").fadeIn("medium");
        $("#xb5").fadeIn("fast");

        $(".blackbox6").fadeIn("slow").delay(7000).fadeOut('slow');
          $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
    });
    $("#xb6").click(function(){
        $("#xb6").fadeOut("fast");
          $("#euro-xb6").fadeIn("slow");
        });
    $("#xb4").click(function(){
        $("#xb4").fadeOut("fast");
          $("#euro-xb4").fadeIn("slow");
        });
    $("#xb5").click(function(){
        $("#xb3").fadeIn("slow");
        $("#xb7").fadeIn("fast");
        $("#xb8").fadeIn("medium");
        $(".blackbox7").fadeIn("slow").delay(7000).fadeOut('slow');
          $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
        $("#xb5").fadeOut("fast");
          $("#euro-xb5").fadeIn("slow");
        });
    $("#xb3").click(function(){
        $("#xb3").fadeOut("fast");
          $("#euro-xb3").fadeIn("slow");
        });
    $("#xb7").click(function(){
        $("#xb7").fadeOut("fast");
          $("#euro-xb7").fadeIn("slow");
        });
    $("#xb8").click(function(){
        $("#xb8").fadeOut("fast");
          $("#euro-xb8").fadeIn("slow");
        });
});

$(document).ready(function(){
    $(".kat-triggerb3").click(function(){
        $(".blackbox12").fadeIn("slow").delay(7000).fadeOut('slow');
          $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
    });
});


$(document).ready(function(){
    $(".kat-triggerb4").click(function(){
        $("#xb13").fadeIn("slow");
        $("#xb14").fadeIn("medium");
        $("#xb15").fadeIn("fast");

        $(".blackbox9").fadeIn("slow").delay(7000).fadeOut('slow');
          $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
    });
    $("#xb13").click(function(){
        $("#xb13").fadeOut("fast");
          $("#euro-xb13").fadeIn("slow");
        });
    $("#xb14").click(function(){
        $("#xb14").fadeOut("fast");
          $("#euro-xb14").fadeIn("slow");
        });
    $("#xb15").click(function(){
        $("#xb15").fadeOut("fast");
          $("#euro-xb15").fadeIn("slow");
        });
});


$(document).ready(function(){
    $(".kat-triggerb5").click(function(){
        $("#xb9").fadeIn("slow");
        $("#xb10").fadeIn("medium");
        $("#xb11").fadeIn("fast");
        $("#xb12").fadeIn("slow");

        $(".blackbox8").fadeIn("slow").delay(7000).fadeOut('slow');
          $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
    });
    $("#xb9").click(function(){
        $("#xb9").fadeOut("fast");
          $("#euro-xb9").fadeIn("slow");
        });
    $("#xb10").click(function(){
        $("#xb10").fadeOut("fast");
          $("#euro-xb10").fadeIn("slow");
        });
    $("#xb11").click(function(){
        $("#xb11").fadeOut("fast");
          $("#euro-xb11").fadeIn("slow");
        });
    $("#xb12").click(function(){
        $("#xb12").fadeOut("fast");
          $("#euro-xb12").fadeIn("slow");
        });
});


$(document).ready(function(){
    $(".kat-triggerb6").click(function(){
        $("#xb19").fadeIn("slow");
        $("#xb20").fadeIn("medium");
        $("#xb21").fadeIn("fast");
        $("#xb23").fadeIn("slow");

        $(".blackbox11").fadeIn("slow").delay(7000).fadeOut('slow');
          $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
    });
    $("#xb19").click(function(){
        $("#xb19").fadeOut("fast");
          $("#euro-xb19").fadeIn("slow");
        });
    $("#xb20").click(function(){
        $("#xb20").fadeOut("fast");
          $("#euro-xb20").fadeIn("slow");
        });
    $("#xb21").click(function(){
        $("#xb21").fadeOut("fast");
          $("#euro-xb21").fadeIn("slow");
        });
    $("#xb23").click(function(){
        $("#xb23").fadeOut("fast");
          $("#euro-xb23").fadeIn("slow");
        });
});


$(document).ready(function(){
    $(".kat-triggerb7").click(function(){
        $(".blackbox10").fadeIn("slow").delay(7000).fadeOut('slow');
          $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
    });
    $(".blackbox10").click(function(){
      $("#xb16").fadeIn("slow");
      $("#xb17").fadeIn("medium");
      $("#xb18").fadeIn("fast");
        });

    $("#xb16").click(function(){
        $("#xb16").fadeOut("fast");
          $("#euro-xb16").fadeIn("slow");
        });
    $("#xb17").click(function(){
        $("#xb17").fadeOut("fast");
          $("#euro-xb17").fadeIn("slow");
        });
    $("#xb18").click(function(){
        $("#xb18").fadeOut("fast");
          $("#euro-xb18").fadeIn("slow");
        });
});


$(document).ready(function(){
    $(".kat-triggerc1").click(function(){
      $("#xc1").fadeIn("slow");
      $("#xc2").fadeIn("fast");
    });

    $("#xc1").click(function(){
      $(".blackboxc1").fadeIn("slow").delay(7000).fadeOut('slow');
        $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
        $("#xc1").fadeOut("fast");
            $("#euro-xc1").fadeIn("slow");
            $("#euro-xc11").fadeIn("slow");
            $("#euro-xc111").fadeIn("slow");
        });

    $("#xc2").click(function(){
      $(".blackboxc1").fadeIn("slow").delay(7000).fadeOut('slow');
        $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
        $("#xc2").fadeOut("fast");
            $("#euro-xc2").fadeIn("slow");
            $("#euro-xc22").fadeIn("slow");
            $("#euro-xc222").fadeIn("slow");
        });
});

$(document).ready(function(){
    $(".kat-triggerc2").click(function(){
      $("#xc10").fadeIn("slow");
      $("#xc11").fadeIn("fast");
    });

    $("#xc10").click(function(){
        $("#xc10").fadeOut("fast");
          $("#xxc100").fadeIn("slow");
        });

        $("#xxc100").click(function(){
            $("#xxc100").fadeOut("slow");
            $("#euro-xxc10").fadeIn("slow");
            $("#euro-xxc100").fadeIn("slow");
            $("#euro-xxc1000").fadeIn("slow");
            });

        $("#xc11").click(function(){
            $("#xc11").fadeOut("fast");
            $("#xa1").fadeIn("fast");
            $("#xa2").fadeIn("slow");
            $("#xa3").fadeIn("medium");
            $("#xa4").fadeIn("fast");
            $("#xa5").fadeIn("fast");
            $("#a7").fadeOut("slow");
            });

});

$(document).ready(function(){
    $(".kat-triggerc3").click(function(){
      $("#xc7").fadeIn("slow");
      $("#xc8").fadeIn("medium");
      $("#xc9").fadeIn("fast");
      $(".blackboxc3").fadeIn("slow");
        $(".kat1").fadeIn("slow");
    });

    $("#xc7").click(function(){
        $("#xc7").fadeOut("fast");
        });

    $("#xc8").click(function(){
        $("#xc8").fadeOut("fast");
        });

    $("#xc9").click(function(){
        $("#xc9").fadeOut("fast");
        });

        $(".blackboxc3").click(function(){
          $("#xxc1").fadeIn("fast");
          $("#xxc2").fadeIn("medium");
          $("#xxc3").fadeIn("slow");
          $("#xxc4").fadeIn("fast");
          $("#xxc5").fadeIn("medium");
          $("#xxc6").fadeIn("slow");
          $("#xxc7").fadeIn("fast");
          $("#xxc8").fadeIn("medium");
          $("#xxc9").fadeIn("slow");
          $("#xxc10").fadeIn("fast");
          $("#xxc11").fadeIn("medium");
          $("#xxc12").fadeIn("slow");
          $(".blackboxc3").fadeOut("slow")
          });

          $("#xxc1").click(function(){
              $("#xxc1").fadeOut("fast");
              });
          $("#xxc2").click(function(){
              $("#xxc2").fadeOut("fast");
              });
          $("#xxc3").click(function(){
              $("#xxc3").fadeOut("fast");
              });
          $("#xxc4").click(function(){
              $("#xxc4").fadeOut("fast");
              });
          $("#xxc5").click(function(){
              $("#xxc5").fadeOut("fast");
              });
          $("#xxc6").click(function(){
              $("#xxc6").fadeOut("fast");
              });
          $("#xxc7").click(function(){
              $("#xxc7").fadeOut("fast");
              });
          $("#xxc8").click(function(){
              $("#xxc8").fadeOut("fast");
              });
          $("#xxc9").click(function(){
              $("#xxc9").fadeOut("fast");
              });
          $("#xxc10").click(function(){
              $("#xxc10").fadeOut("fast");
              });
          $("#xxc11").click(function(){
              $("#xxc11").fadeOut("fast");
              });

          $("#xxc12").click(function(){
              $("#xxc12").fadeOut("fast");
              $("#euro-xc3").fadeIn("slow");
              $("#euro-xc33").fadeIn("slow");
              $("#euro-xc333").fadeIn("slow");
              $("#euro-xc3333").fadeIn("slow");
              });

});

$(document).ready(function(){
    $(".kat-triggerc4").click(function(){
      $(".blackboxc4").fadeIn("slow").delay(7000).fadeOut('slow');
        $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
        $("#c4").delay(3000).fadeOut("xxslow");
        $("#c4-sort").delay(3000).fadeIn("xxslow").fadeOut('xxslow');
    });
});


$(document).ready(function(){
    $(".kat-triggerc5").click(function(){
      $("#xc3").fadeIn("slow");
      $("#xc4").fadeIn("fast");
      $("#xc5").fadeIn("medium");
    });

    $("#xc3").click(function(){
        $("#xc3").fadeOut("fast");
        });
    $("#xc4").click(function(){
        $("#xc4").fadeOut("fast");
        });
    $("#xc5").click(function(){
        $("#xc5").fadeOut("fast");
        });
});

$(document).ready(function(){
    $(".kat-triggerc6").click(function(){
      $(".blackboxc6").fadeIn("slow").delay(7000).fadeOut('slow');
        $(".kat1").fadeIn("slow").delay(7000).fadeOut('slow');
        $("#c6").delay(3000).fadeOut("xxslow");
        $("#c6-sort").delay(3000).fadeIn("xxslow").fadeOut('xxslow');
    });
});


$(document).ready(function(){
    $(".kat-triggere2").click(function(){
      $("#xe3").fadeIn("slow");
    });

    $("#xe3").click(function(){
        $("#xe3").fadeOut("fast");
        });
});


$(document).ready(function(){
    $(".kat-triggere3").click(function(){
      $("#xe1").fadeIn("slow");
      $("#xe2").fadeIn("fast");
    });

    $("#xe1").click(function(){
        $("#xe1").fadeOut("fast");
          $("#euro-xe1").fadeIn("slow");
        });

        $("#xe2").click(function(){
            $("#xe2").fadeOut("fast");
              $("#euro-xe2").fadeIn("slow");
            });
});

$(document).ready(function(){
    $(".kat-triggere5").click(function(){
      $("#xe4").fadeIn("slow");
      $("#xe5").fadeIn("medium");
      $("#xe6").fadeIn("fast");
    });

    $("#xe4").click(function(){
        $("#xe4").fadeOut("fast");
          $("#euro-xe4").fadeIn("slow");
        });

    $("#xe5").click(function(){
        $("#xe5").fadeOut("fast");
          $("#euro-xe5").fadeIn("slow");
        });

    $("#xe6").click(function(){
                $("#xe6").fadeOut("fast");
          $("#euro-xe6").fadeIn("slow");
        });
});
