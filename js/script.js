$('#hamburger').on('click', function() {
    $('#navLinks').toggleClass('show');
});

$(document).ready(function() {
    const text = "Mobile Developer | Full Stack Developer";
    let i = 0;

    function type() {
        if(i < text.length) {
            $('#typingText').append(text[i]);
            i++;
            setTimeout(type, 100);
        }
    }
    type();
});