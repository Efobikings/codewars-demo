// a function to return yellow,green and red

function updateLight(current){
    if (current === 'yellow'){
        return  'red'
    } else if (current === 'red'){
        return 'green'
    } else {
        return 'yellow'
    }
}


function updateLight2(current){
    return current==='yellow'?'red': current==='red'?'green' : 'yellow'
}