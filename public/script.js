$(document).ready(function() {
    // Task 1: Change color of all paragraphs to yellow
    $("#btnChangeColor").on("click", function() {
        // Select all paragraphs and set their CSS color to yellow
        $("p").css("color", "yellow");
    });

    // Task 2: Hover effect on paragraphs
    $("p").hover(
        // Function when mouse enters the paragraph
        function() {
            // Make the paragraph bold
            $(this).css("font-weight", "bold");
        },
        // Function when mouse leaves the paragraph
        function() {
            // Revert the paragraph to normal font-weight
            $(this).css("font-weight", "normal");
        }
    );
});
