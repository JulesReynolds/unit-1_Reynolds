var mydiv = document.getElementById("mydiv");
mydiv.innerHTML = "Hello World";


//initialize function called when the script loads
function initialize(){
    cities();
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
            population: 1700000
        },
        {
            city: 'Maputo',
            population: 1101170
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
};

//call the initialize function when the document has loaded
$(document).ready(initialize);

//copy & pasted debug.js below

//function to add city population data to columns in table
function addColumns(cities){
    //loops information through table rows based on value of i
    $('tr').each(function(i){
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
            } else if (cityPop[i-1].population < 500000){
                citysize = 'Medium';
//if cityPop is greater than 500,000, citySize defined as large
            } else {
                citySize = 'Large';
            };
//appends citySize values to table data
            $this.append('<td>citySize</td>');
        };
    });
};

//function to add mouseover events to table
function addEvents(){
//defines mouseover function for table 
    $('#table').mouseover(function(){
        //defines color variable
        var color = "rgb";
//loops color variable for i 
        for (var i=0; i<3; i++){
//defines random number 0 - 255
            var random = Math.round(Math.random() * 255);
//rgb color equals color + random number value
            color += "random";
//if i < 2 (for smaller cities) ??
            if (i<2){
                color += ",";
            //otherwise ??
            } else {
                color += ")";
        };
//applies color to citySize events
        $(this).css('color', color);
    };
//creates clickme function
    function clickme(){
// logs alert
        alert('Hey, you clicked me!');
    };
//applies clickme function to table
    $('table').on('click', clickme);
});
}
