$(function(){

  localStorage.clear();
  
  var baseColor;
  
	var getParams = function(){
  	var params = [];
  	$('input.param').each(function(){
    	var $this = $(this);
    	params.push($this.val());
  	})	  
	  var lessVars = {
      '@baseColor': baseColor,
      '@difference': params[0] + '%',
      '@distance1': params[1],
      '@distance2': params[2],
      '@angle': params[3],
      '@distance3': params[4],
      '@distance4': params[5],
      '@distance5': params[6],
      '@distance6': params[7]
    };
    return lessVars;
	};
	
  var paramListener = function(){
    lessVars = getParams();
    less.modifyVars(lessVars);
  };
  
  $('input.param').on('keyup',paramListener);

  picker = new Color.Picker({
    color: "#FD00FF", // accepts rgba(), or #hex
    display: true,
    size: 200,
    callback: function(rgba, state, type) {
      baseColor = Color.Space(rgba, "RGBA>W3");
      lessVars = getParams();
      less.modifyVars(lessVars);
    }
  });
});