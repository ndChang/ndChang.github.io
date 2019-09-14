// Upon Submitting information into input Save the values to variables
// Prevent page from reloading when inputs are submitted
// When all inputs are saved run calculations for year 0

// Time will start at 0 years and be referenced as userAge
// Two buttons will allow user to add time in increments. Time is added at 1 or 5 iterations at 1 year intervals
// Each iteration will calculate a new value for growth of account without removing previous iterations of values
// All growth values will be recorded on a ledger. Ledger will display T year, value of initial investment, growth of investment, and difference between investnment and target goal (wealth)
// Ledger will have both a cashier style receipt display and updated line graph illustrating inveestment growth

// When user investment amount has reached/surpassed the user wealth goal. Display secondary window telling user how many years were required to reach desired amount





function onReady() {

    //Open Future Calculator Modal
    $('#future-value-modal').click(fv);
    function fv() {
        close();
        $('#calculator').css('display', 'flex');
    }
    // Future Value Calculator 
        let userAge;
        let userWealth;
        let userSaving;
        let userGrowth;
        let retirementAge = 65;
        const yaxis = [];
        const xaxis = [];

        function onAgeSubmit(event) {
            event.preventDefault();
            userAge = parseInt($('#age').val());
            // console.log(userAge)
        }
        function onWealthSubmit(event) {
            event.preventDefault();
            userWealth = parseInt($('#wealth').val());
            // console.log(userWealth)
        }
        function onSavingSubmit(event) {
            event.preventDefault();
            userSaving = parseInt($('#saving').val());
            // console.log(userSaving);
        }
        function onGrowthSubmit(event){
            event.preventDefault();
            userGrowth = parseInt($('#growth').val());
            userGrowth/=100;
            // console.log(userGrowth);
            futureCalculation();
        }
        function futureCalculation() {
            let timeUntilRetirement = retirementAge - userAge;
            //Data for graphs
            // userWealth = userSaving * (1 + userGrowth)**(timeUntilRetirement);
            for (let i = 0; i<=timeUntilRetirement; i++) {
                const futureAge = [];
                const futureWealth = [];
                let userInvestment = userSaving * (i + 1);
                userWealth = userInvestment * (1 + userGrowth)**(i);
                userWealth = parseFloat(userWealth).toFixed(2);
                // yaxis.push(userWealth);
                let y = new yAxisPoints(userWealth);
                console.log(y);
                yaxis.push(y);
                futureAge[i] = i + userAge;
                xaxis.push(futureAge[i])
                futureWealth[i] = "$" + userWealth;
                $('#saving-log').append('<p class="table">' + futureAge[i] +" "+ futureWealth[i] + '</p>');
                // dataPoints.y = futureWealth[i]
            } 
            console.log(yaxis);
            console.log(xaxis);
        }
        function yAxisPoints(userWealth) {
            this.y = userWealth;
        }

        // line chart
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2",
            title:{
                text: "Simple Line Chart"
            },
            axisY:{
                includeZero: false
            },
            data: [{        
                type: "line",       
                dataPoints: [
                    { y: 450 },
                    { y: 414},
                    { y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
                    { y: 460 },
                    { y: 450 },
                    { y: 500 },
                    { y: 480 },
                    { y: 480 },
                    { y: 410 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
                    { y: 500 },
                    { y: 480 },
                    { y: 510 }
                ]
            }]
        });
        chart.render();

        $('#user-info').submit(onAgeSubmit);
        $('#user-info').submit(onWealthSubmit);
        $('#user-info').submit(onSavingSubmit);
        $('#user-info').submit(onGrowthSubmit);

    //Future Calculator End

    //Relaxr Blog

    function blog() {
        close();
        $('#relaxr').css('display', 'flex');
    }
    $('#relaxr-modal').click(blog);

    //Citipix Search

    function search() {
        close();
        $('#citipix').css('display', 'flex');
    }
    $('#citipix-modal').click(search);

    //Close

    function close() {
        $('#citipix').css('display', 'none');
        $('#relaxr').css('display', 'none');
        $('#calculator').css('display', 'none');
    }
    $('.close').click(close);
}
$('document').ready(onReady);