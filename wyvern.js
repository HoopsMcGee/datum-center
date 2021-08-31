function scatterplot(title_text,csv_location, div_id){
	//we set the location of the dataset
	const csv = csv_location;
	
	//we read in the dataset
	//this makes an array of objects
	//each object is a single row from the .csv
	function plotFromCSV(){
		d3.csv(csv, function(err, rows){
			//we are making a function inside a function
	
			console.log(rows)
			processData(rows);
		}
			);
	}
	
	//this processes the data into a format plotly can use
	function processData(allRows){
		let y = [];
		let value = [];
		let value_faux = [];
		let city = [];
		let row;
	
		let i = 0;
		while (i < allRows.length) {
			row = allRows[i];
			y.push(row["y"]);
			value.push(row["Value"]);
			value_faux.push(row["ValueFaux"]);
			city.push(row["City"])
			i += 1;
		}
		
		makePlotly(y, value, value_faux, city);
		console.log(y, value, value_faux);
	}
	
	function makePlotly(y, value, value_faux, city){
		let traces = [
		{x: value,
		y: y,
		text: city,
		hovertemplate: '<b>%{text}</b><br><br>' + '<b>%{x}</b>: <i>' + title_text + "</i><extra></extra>",
		mode: "markers",
		marker: {
	                color: "#171717",
	                opacity: 0.5,
	                line: {
	                    color: "#171717",
	                    width: 1
	                },
	                size: 5,
	                symbol: "circle"
	            }
	    }, //end of first trace
	    {x:value_faux,
	    	y: y,
	    	text: city,
			hovertemplate: '<b>%{text}</b><br><br>' + title_text + ': %{x}' + "<extra></extra>",
			mode: "markers",
	    	marker: {
	    		color: "#DA0037",
	    		line: {
	    			color: "#DA0037",
	    			width: 4
	    		},
	    		size: 80,
	    		symbol: "line-ns"
	    	}
	    }//end of second trace
		];//end of traces
	
		let layout = {
			automargin: false,
			margin: {t:0, b:20, r:20, l:120},
			title: {text: title_text,
					x: .12,
					y: .9,
					font: {
						size: 17
					},
					xanchor: "right"

			},
			font: {
				color: "#171717"
			},
			hovermode: "closest",
			paper_bgcolor: "#D0D6DC",
			plot_bgcolor: "#ffffff",
			xaxis: {
	            range: [d3.min(value), d3.max(value)],
	            showgrid: true,
	            showline: false,
	            gridcolor: "#C9C9C9",
	            hoverformat: '.2f'
	        },
	        yaxis: {
	        	range: [-.5, .5],
	            automargin: false,
	            showgrid: true,
	            gridcolor: "#D9D9D9",
	            title: '<b>stuff</b>',
	            visible: false
	        },
	        showlegend: false,
	
		}; //end of layout
	
		let config = { responsive: true, editable: false };
	
		Plotly.newPlot(div_id, traces, layout, config);
	}
	
	plotFromCSV();
}