document.addEventListener('DOMContentLoaded', function() { 
    let box1 = $('#box1')
    let box2 = $('#box2')
    let box3 = $('#box3')
    let box4 = $('#box4')
    let box5 = $('#box5')
    let box6 = $('#box6')
    let box7 = $('#box7')
    let box8 = $('#box8')
    let box9 = $('#box9')
    let col = $('.column') 

    let counter = 0
    col.click(function(e) { 
        if (counter % 2 == 0){ 
            $(this).append('<span class="x">X</span>')
        } else if (counter % 2 == 1){ 
            $(this).append('<span class="o">O</span>')
        }
        counter++ 
    }) 
    $('#clear').click(() => { 
        $('span').remove() 
    })
}) 