function polarplot(div_id){
	//we read in the data

	//we process the data
	data = [{
		type: 'scatterpolar',
		r: [0.21, 0.74, 0.58, 0.17, 0.81, 0.42, 0.27, 0.37, 0.41, 0.62, 0.61, 0.90],
		theta: ["v1","v2","v3","v4","v5","v6","v7","v8","v9","v10","v11","v12"],
		fill: 'toself'
	}]
	//we make the plot
	layout = {
		polar: {
			radialaxis: {
				visible: true,
				range: [0, 1]
			}
		},
		showlegend: false
	}
	//plot it
	Plotly.newPlot(div_id, data, layout)
	//the end
}