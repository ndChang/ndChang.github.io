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
            for (let i = 0; i<=timeUntilRetirement; i++) {
                const futureAge = [];
                const futureWealth = [];
                let userInvestment = userSaving * (i + 1);
                userWealth = userInvestment * (1 + userGrowth)**(i);
                userWealth = parseFloat(parseFloat(userWealth).toFixed(2));

                let y = userWealth;

                yaxis.push(y);
                futureAge[i] = i + userAge;
                let x = futureAge[i];

                xaxis.push(x);
                futureWealth[i] = "$" + userWealth;
                $('#saving-log').append('<p class="table">' + futureAge[i] +" "+ futureWealth[i] + '</p>');

            } 

            console.log(yaxis.map((ypoint, index) => ({x: xaxis[index], y: yaxis[index]})))

            var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                theme: "light2",
                title:{
                    text: "Retirement Savings"
                },
                axisY:{
                    includeZero: false
                },
                data: [{        
                    type: "line",       
                    dataPoints: yaxis.map((ypoint, index) => ({x: xaxis[index], y: yaxis[index]})),
                }]
            });
            chart.render();
        }

        // Axis Points
        function yAxisPoints(userWealth) {
            this.y = userWealth;
        }
        function xAxisPoints(futureAge) {
            this.x = futureAge;
        }

        $('#user-info').submit(onAgeSubmit);
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