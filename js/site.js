window.onload = function() {
  localStorage.clear();
	picker = new Color.Picker({
		color: "#FD00FF", // accepts rgba(), or #hex
		display: true,
		size: 200,
		callback: function(rgba, state, type) {
			var baseColor = Color.Space(rgba, "RGBA>W3");
			less.modifyVars({
        '@baseColor': baseColor
      });
		}
	});
};