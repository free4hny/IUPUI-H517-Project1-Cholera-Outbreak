// const data = d3.csv("deaths_age_sex.csv",function(d){
//         return console.log(data); 
//     });

//     const width = 800;
//     const height = 400;
//     const margin = {top: 50, bottom: 50, left: 50, right: 50};

//     const svg = d3.select("#d3-container")
//         .append('svg')
//         .attr('height', height - margin.top - margin.bottom)
//         .attr('width', width - margin.left - margin.right)
//         .attr('viewBox', [0,0, width, height]);

    // const x = d3.scaleBand()
    //     .domain(d3.range(data.length))
    //     .range([margin.left, width - margin.right])
    //     .padding(0.1);
    // const y = d3.scaleLinear()
    //     .domain([0, 100])
    //     .range([height -margin.bottom, margin.top])

    var DeathsAgeSex = [];
		var FemaleDeaths = 0,MaleDeaths=0;
		var GenderPlot=[{male:0,female:0,label:"0-10"},
		{male:0,female:0,label:"11-20"},
		{male:0,female:0,label:"21-40"},
		{male:0,female:0,label:"41-60"},
		{male:0,female:0,label:"61-80"},
		{male:0,female:0,label:">80"}];


    d3.csv("deaths_age_sex.csv",function(error,d){
        if (error) { 
            console.log(error); 
        } else { 
            console.log(d); 
        }
        // assign pumps data
        for (var i=0; i<d.length; i++){
            var record = d[i];
            var object = {
                age: record.age,
                gender: record.gender
                }
                DeathsAgeSex.push(object);
            }
            for (var j=0; j<DeathsAgeSex.length; j++){
                if(DeathsAgeSex[j].gender ==0){ 
                    MaleDeaths++;
                    if(DeathsAgeSex[j].age == 1){ GenderPlot[1].male++;}
                    else if(DeathsAgeSex[j].age == 2){ GenderPlot[2].male++;}
                    else if(DeathsAgeSex[j].age == 3){ GenderPlot[3].male++;}
                    else if(DeathsAgeSex[j].age == 4){ GenderPlot[4].male++;}
                    else if(DeathsAgeSex[j].age == 5){ GenderPlot[5].male++;}
                    else if(DeathsAgeSex[j].age == 0){ GenderPlot[0].male++;}
                }
                else { 
                    FemaleDeaths++;
                    if(DeathsAgeSex[j].age == 1){ GenderPlot[1].female++;}
                    else if(DeathsAgeSex[j].age == 2){ GenderPlot[2].female++;}
                    else if(DeathsAgeSex[j].age == 3){ GenderPlot[3].female++;}
                    else if(DeathsAgeSex[j].age == 4){ GenderPlot[4].female++;}
                    else if(DeathsAgeSex[j].age == 5){GenderPlot[5].female++;}
                    else if(DeathsAgeSex[j].age == 0){ GenderPlot[0].female++;}
                }
            }
                
        console.log(GenderPlot[0].female, GenderPlot[1].female, GenderPlot[2].female, GenderPlot[3].female, GenderPlot[4].female, GenderPlot[5].female)
        console.log(GenderPlot[0].male, GenderPlot[1].male, GenderPlot[2].male, GenderPlot[3].male, GenderPlot[4].male, GenderPlot[5].male)
        var trace1 = {
        x: ['0-10', '11-20', '21-40', '41-60', '61-80', '>80'] ,
        y:  [GenderPlot[0].male, GenderPlot[1].male, GenderPlot[2].male, GenderPlot[3].male, GenderPlot[4].male, GenderPlot[5].male] ,
        name: 'Males',
        marker: {color: '#d8b365'},
        type: 'bar'
        };

        var trace2 = {
        x: ['0-10', '11-20', '21-40', '41-60', '61-80', '>80'] ,
        y:  [GenderPlot[0].female, GenderPlot[1].female, GenderPlot[2].female, GenderPlot[3].female, GenderPlot[4].female, GenderPlot[5].female] ,
        name: 'Females',
        marker: {color: '#5ab4ac'},
        type: 'bar'
        };


        var data = [trace1, trace2];

        var layout = {barmode: 'group'};
			var layout = {
				title: 'Bar Chart - Deaths by Age and Gender',
				font: "Times New Roman",xaxis: {tickfont: {	size: 20, color: 'black'}},
				xaxis: {title: 'Age Groups',	titlefont: {font: "Open Sans",size: 16,color: 'black'},
				tickfont: {	size: 14,color: "black"}},
				yaxis: {title: 'Number of Deaths',titlefont: {	font: "Open Sans",size: 16,color: 'black'},
				tickfont: {	size: 14,color: "black"}},
				barmode: 'group',bargap: 0.10,bargroupgap: 0.05
                    };
        Plotly.newPlot('barchart', data, layout);

        

    // svg
    //     .append('g')
    //     .attr('fill', 'royalblue')
    //     .selectAll('rect')
    //     .data(data)   
    //     .join('rect')
    //         .attr('x', (d,i) => x(i))
    //         .attr('y', (d) => y(d.age))
    //         .attr('height', d => y(0) - y(d.age))
    //         .attr('width', x.bandwidth())

    // svg.node()

});