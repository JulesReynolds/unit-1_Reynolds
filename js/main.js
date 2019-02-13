//add city population data
function initialize(){
	cities();
	loadGeoJson();

};

 //function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        { 
            city: 'Lilongwe',
            population: 646750
        },
        {
            city: 'Lusaka',
            population: 17000
        },
        {
            city: 'Maputo',
            population: 110117
        },
        {
            city: 'Johannesburg',
            population: 49320000
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

    addColumns(cityPop);

 };
    

//function to add city population data to columns in table
function addColumns(cityPop){ 
    //loops information through table rows based on value of i
    $("tr").each(function(i){
//if statement for object i
        if (i == 0){
//appends City Size to table header when i = 0
            $(this).append('<th>City Size</th>');
        } else {
//creates variable citySize 
            var citySize; 
//evaluates values of cityPop: if less than 100,000, citySize defined as small
            if (cityPop[i-1].population < 100000){
                citySize = 'Small';
//if cityPop is less than 500,000, citySize defined as medium
            }
            else if (cityPop[i-1].population < 500000){
                citySize = 'Medium';
//if cityPop is greater than 500,000, citySize defined as large
            } else {
                citySize = 'Large';
            };
//appends citySize values to table data
            $(this).append('<td>' + citySize + '</td>');
        };
    });
};

 function loadGeoJson(){
    	//define variable to hold data
    	var mydata;
    	//basic jQuery ajax method
    	$.ajax("data/megacities.geojson", {
        dataType: "json",
        success: function(response){
            mydata = response;
            //mydata undefined
            console.log(mydata)
        }
    }); 
    	//mydata defined
    	console.log(mydata)
    };

//Debug Script Lab 3

//define Ajaxfunction
function debugAjax(){
	//define mydata to hold data
	var mydata;

	//define debugCallback function
	function debugCallback(response){
		//appends GeoJSON
		$(mydiv).append('<br>GeoJSON data:<br>' + JSON.stringify(mydata));
		//appends geojson string data to mydiv
		$(mydiv).append('GeoJSON data: ' + JSON.stringify(mydata));
			};

	//basic ajax method, callback function with response parameter 
	$.ajax("data/megacities.geojson", {
		dataType: "json",
		success: function(response){
			mydata = response; 
			debugCallback(mydata)
		}

	});
		
		};


$(document).ready(debugAjax);
$(document).ready(initialize);
	