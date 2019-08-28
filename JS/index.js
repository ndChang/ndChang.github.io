/* 
User prompt to input age.
    Test input if it is a number >= 0
        If number is valid store in variable userAge

Prompt user for desired amount considered as "Wealth".
    Test input if it is a number
        If input is valid store in variable targetWealth

Prompt user for initial amount considered as "Start"
    Amount must be a number
        If amount is > "Wealth" redirect user to "local casino"

slide an image from left side of screen to right
    Every 10 increments will alter the image
    When "start" amount >= "Wealth" prompt user that "Goal has been reached in increment #"
    
*/

$(".open").on("click", function() {
    $(".popup-overlay, .popup-content").addClass("active");
});

$(".close, .popup-overlay").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
});