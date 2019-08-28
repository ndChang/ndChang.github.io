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
    let currentIndex = 0;
    const rating = [ 0, 0, 0, 0, 0];
    const images = [1, 2, 3, 4, 5];
    let imgSwap = $('');

    function onAgeSubmit(event) {
        event.preventDefault();
        console.log(event);
    }
    function onWealthSubmit(event) {
        event.preventDefault();
        console.log(event);
    }
    function onSavingSubmit(event) {
        event.preventDefault();
        console.log(event);
    }
    function onGrowthSubmit(event){
        // event.preventDefault();
        console.log(event);
    }

    $('#age').submit(onAgeSubmit);
    $('#wealth').submit(onWealthSubmit);
    $('#saving').submit(onSavingSubmit);
    $('#growth').submit(onGrowthSubmit);

}
$('document').ready(onReady);