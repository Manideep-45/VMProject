
function calendar(){
    var day = Number(document.getElementById('demo').value)
    switch(day)
{
    case 1:
    alert('Monday')
    break
    case 2:
    alert('Tuesday')
    break
    case 3:
    alert('Wednesday')
    break
    case 4:
    alert('Thursday')
    break
    case 5:
    alert('Friday')
    break
    case 6:
    alert('Saturday')
    break
    default:
        alert('Its Sunday')
        break
}
}