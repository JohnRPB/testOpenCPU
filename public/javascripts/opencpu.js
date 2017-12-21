ocpu.seturl("//public.opencpu.org/ocpu/library/ggplot2/R")

//call R function: appdemo::randomplot(n=nfield, dist=distfield):
$("button").click(function(){
  console.log("something is working");
    var nfield = parseInt($("#nfield").val());
    var distfield = $("#distfield").val(); 
    var arr = [0.06906413, -0.82378285,  0.61439882,  0.29258109, -1.57506915, -1.05515574, 1.02599153,  0.83507498,  0.62244682,  0.13377341,  1.15701028, -0.03380833, 1.17389353,  0.36903823,  2.46733188, -1.44107371, -0.51164589, -0.24428736, -0.47984840,  0.52194439]
    var arr2 = [-1.06034018, 1.13765058, 0.65796205, 1.18658312, -0.09703096, -0.36539843, 0.89416108, -1.72055862, -0.03057161, 2.02937110, -0.42692445, -0.17994475, -1.41016151, 0.84272638, 1.58574530, 0.02911081, -1.83078772, -1.11544665, 0.62029890, -0.57270987]
    var req = $("#plotdiv").rplot("qplot", {
        x: arr,
        y: arr2
    }).fail(function(){
        alert("R returned an error: " + req.responseText); 
    });
})
