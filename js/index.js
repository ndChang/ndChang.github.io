function onReady() {

    var $dOut = $('#date'),
    $hOut = $('#hours'),
    $mOut = $('#minutes'),
    $sOut = $('#seconds'),
    $ampmOut = $('#ampm');

    var days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];

    function update(){
    var date = new Date();
    
    var ampm = date.getHours() < 12
                ? 'AM'
                : 'PM';
    
    var hours = date.getHours() == 0
                ? 12
                : date.getHours() > 12
                    ? date.getHours() - 12
                    : date.getHours();
    
    var minutes = date.getMinutes() < 10 
                    ? '0' + date.getMinutes() 
                    : date.getMinutes();
    
    var seconds = date.getSeconds() < 10 
                    ? '0' + date.getSeconds() 
                    : date.getSeconds();
    
    var dayOfWeek = days[date.getDay()];

    
    var dateString = dayOfWeek;
    
    $dOut.text(dateString);
    $hOut.text(hours);
    $mOut.text(minutes);
    $sOut.text(seconds);
    $ampmOut.text(ampm);
    } 

    update();
    window.setInterval(update, 1000);


    //Open Future Calculator Modal
    function fv() {
        close();
        hide();
        $('.calculator-icon').addClass('active');
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

                let j = i+1;
                let userInvestment = userSaving * j;

                let interest = 1 + userGrowth;
                interest = interest**i;

                userWealth = userInvestment * interest;



            

                //Tabulate the Log
                userWealth = parseFloat(userWealth).toFixed(2);
                futureAge[i] = i + userAge;
                futureWealth[i] = "$" + userWealth;
                logData(futureAge[i], userWealth, userInvestment);
                



                //Tabulate the Graph
                userWealth = parseFloat(userWealth);
                let y = userWealth;

                yaxis.push(y);
                
                let x = futureAge[i];

                xaxis.push(x);
                

            } 
            
            //Generate Chart
            let dataMap = yaxis.map((ypoint, index) => ({x: xaxis[index], y: yaxis[index]}));

            chartGen(dataMap);
        }

        //LogData

        function logData(age, value, principal) {

            let difference = value - principal;
            difference = '$' + parseFloat(difference).toFixed(2);
            principal = parseFloat(principal).toFixed(2);
            $('#log tr:last').after('<tr><td>' + age + '</td><td>' +'$' + value + '</td><td>' + principal + '</td><td>' + difference + '</td></tr>');
        }

        // Axis Points
        function yAxisPoints(userWealth) {
            this.y = userWealth;
        }
        function xAxisPoints(futureAge) {
            this.x = futureAge;
        }


        //Chart Generator

        function chartGen(map){
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
                    dataPoints: map,
                }]
            });
            chart.render();
        }

    //Future Calculator End

    //Relaxr Blog

    function blog() {
        close();
        hide();
        $('.internet-icon').addClass('active');
        $('#relaxr').css('display', 'flex');
    }


    //Close

    function hide() {
        $('.desktop').css('display','none');
    }
    function show() {
        $('.desktop').css('display', 'block');
    }
    function close() {
        $('#relaxr').css('display', 'none');
        $('.internet-icon').removeClass('active');
        $('#calculator').css('display', 'none');
        $('.calculator-icon').removeClass('active');
        show();
    }



    $('.close').click(close);
    $('.internet-icon').click(blog);
    $('#user-info').submit(onAgeSubmit);
    $('#user-info').submit(onSavingSubmit);
    $('#user-info').submit(onGrowthSubmit);
    $('.calculator-icon').click(fv);

    $('.phoneNumber-icon').wrap('<a href="http://www.google.com/"></a>')
    $('.email-icon').wrap('<a href="http://www.google.com/"></a>')
}
$('document').ready(onReady);