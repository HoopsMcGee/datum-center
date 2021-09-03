function gdp(div_id,csv_location){
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
	}//end of plotfromCSV()


	//this processes the data into a format plotly can use
	function processData(allRows){
		let date = [];
		let akron = [];
		let peoria = [];
		let south_bend = [];
		let dayton = [];
		let erie = [];
		let peer = [];
		let rockford = [];
		let akron_gdp = [];
		let peoria_gdp = [];
		let south_bend_gdp = [];
		let dayton_gdp = [];
		let erie_gdp = [];
		let peer_gdp = [];
		let rockford_gdp = [];
		let row;
	
		let i = 0;
		while (i < allRows.length) {
			row = allRows[i];
			date.push(row["DATE"]);
			akron.push(row["akron pop"]);
			peoria.push(row["peoria pop"]);
			south_bend.push(row["south bend pop"])
			dayton.push(row["dayton pop"]);
			erie.push(row["erie pop"]);
			peer.push(row["peer average pop"]);
			rockford.push(row["rockford pop"]);
			akron_gdp.push(row["akron gdp"]);
			peoria_gdp.push(row["peoria gdp"]);
			south_bend_gdp.push(row["south bend gdp"])
			dayton_gdp.push(row["dayton gdp"]);
			erie_gdp.push(row["erie gdp"]);
			peer_gdp.push(row["peer average gdp"]);
			rockford_gdp.push(row["rockford gdp"]);
			i += 1;
		}
		
		makePlotly(date, akron, peoria, south_bend, dayton, erie, peer, rockford, akron_gdp, peoria_gdp, south_bend_gdp, dayton_gdp, erie_gdp, peer_gdp, rockford_gdp);
		console.log(date, akron, peoria, south_bend, dayton, erie, peer, rockford, akron_gdp, peoria_gdp, south_bend_gdp, dayton_gdp, erie_gdp, peer_gdp, rockford_gdp);
	}//end of processData

	function makePlotly(date, akron, peoria, south_bend, dayton, erie, peer, rockford, akron_gdp, peoria_gdp, south_bend_gdp, dayton_gdp, erie_gdp, peer_gdp, rockford_gdp){
		let rockford_color = 'rgb(38,112,184)';
		let peer_color = 'rgb(67,59,57)';
		let national_color = 'RGBA(29, 195, 29, 1)';
		regular_color = "#aaaaaa";
		let traces =[
			{x: akron,
			y: akron_gdp,
			name: "Akron",
			mode: "markers",
			line: {
				color: regular_color
			},
			hovertemplate: 'Akron, OH<br>$%{y}<br>' + '%{x}k people' + "<extra></extra>",
			},//end of trace_1
			{x: peoria,
			y: peoria_gdp,
			name: "Peoria",
			mode: "markers",
			line: {
				color: regular_color
			},
			hovertemplate: 'Peoria, IL<br>$%{y}<br>' + '%{x}k people' + "<extra></extra>",
			},//end of trace_1
			{x: south_bend,
			y: south_bend_gdp,
			name: "South Bend",
			mode: "markers",
			line: {
				color: regular_color
			},
			hovertemplate: 'South Bend, IN<br>$%{y}<br>' + '%{x}k people' + "<extra></extra>",
			},//end of trace_1
			{x: dayton,
			y: dayton_gdp,
			name: "Dayton",
			mode: "markers",
			line: {
				color: regular_color
			},
			hovertemplate: 'Dayton, OH<br>$%{y}<br>' + '%{x}k people' + "<extra></extra>",
			},//end of trace_1
			{x: erie,
			y: erie_gdp,
			name: "Erie",
			mode: "markers",
			line: {
				color: regular_color
			},
			hovertemplate: 'Erie, PA<br>$%{y}<br>' + '%{x}k people' + "<extra></extra>",
			},//end of trace_1
			{x: rockford,
			y: rockford_gdp,
			name: "Rockford",
			mode: "markers",
			line: {
				color: rockford_color
			},
			hovertemplate: 'Rockford, IL<br>$%{y}<br>' + '%{x}k people' + "<extra></extra>",
			},//end of trace_1
			{
				x: [170, 810],
				y: [11000,52700],
				line: {
				color: national_color
				},
				name: "United States GDP per Capita"
			}
		];//end of traces

		let layout = {
			automargin: false,
			margin: {t:0, b:60, l:50, r:30},
			title: {text: "",
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
			paper_bgcolor: "#ffffff",
			plot_bgcolor: "#ffffff",
			xaxis: {
				range: [170, 810],
				showgrid: true,
				showline: false,
				gridcolor: "#E9EAEB"},
			yaxis: {
				range: [11000, 52700],
				automargin: true,
				showgrid: true,
				gridcolor: "#E9EAEB",
				title: 'Gross Domestic Product ($1000s)'
			},
			showlegend: true,
			legend: {
				orientation: "h"
				}
	
		}; //end of layout
	
		let config = { responsive: true, editable: false };
	
		Plotly.newPlot(div_id, traces, layout, config);

	}//end of makePlotly

	plotFromCSV(); //make the plot

}//end of area_graph()