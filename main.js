document.addEventListener('DOMContentLoaded', function() { 
    let col = $('.column') 
    let firstRow = $('.first-row')
    let secondRow = $('.second-row')
    let thirdRow = $('.third-row')
    let firstColumn = $('.first-column')
    let secondColumn = $('.second-column')
    let thirdColumn = $('.third-column')
    let one = $('.1')
    let two = $('.2')
    let three = $('.3')

    let player1 = [] 
    let player2 = [] 
     
    let winConditions = [
        [1,2,3],
        [1,3,2],
        [3,2,1],
        [1,5,9],
        [9,5,1],
        [1,4,7],
        [7,4,1],
        [2,5,8],
        [8,5,2],
        [3,6,9],
        [9,6,3],
        [4,5,6],
        [6,5,4],
        [7,8,9], 
        [9,8,7], 
        [5,7,3],
        [3,5,7],
        [7,5,3], 
    ]
    
    let counter = 0
    col.click(function(e) { 
        if (counter % 2 == 0){ 
            $(this).html('<span class="x">X</span>')
            player1.push(Number(e.target.classList[0]))
            console.log(player1)
            winConditions.forEach(condition => { 
                if (condition[0] == player1[0] && condition[1] == player1[1] && condition[2] == player1[2]){  
                    alert("Player1 wins")
                }   
            })


        } else if (counter % 2 == 1){ 
            $(this).html('<span class="o">O</span>')
            player2.push(Number(e.target.classList[0]))
            console.log(player2)
            winConditions.forEach(condition => { 
                if (condition[0] == player2[0] && condition[1] == player2[1] && condition[2] == player2[2]){ 
                    alert('Player2 wins')
                }
            }) 
        }
        counter++ 
    }) 
    $('#clear').click(() => { 
        $('span').remove() 
        player1 = []
        player2 = [] 
    })
}) 