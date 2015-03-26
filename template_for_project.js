$(document).ready(function(){
    loadXML();
})

function loadXML(){
    //ajax call
    
    parseXML(xml);

}

function parseXML(xml){
    //loop through data
    
    buildHTML();
    buildCHarts();
    buildTable();

}

function buildHTML(){
    //store and write all the html code to the page

}

function buildCharts(){
    //do hightcharts stuff

}

function buildTable(){
    //do datatables.js stuff
}