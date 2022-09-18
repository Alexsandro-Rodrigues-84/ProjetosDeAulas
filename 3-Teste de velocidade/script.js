function result() {

    let car1 = document.querySelector('#car1').value;
    let velocity1 = document.querySelector('#velocity1').value;
    let car2 = document.querySelector('#car2').value;
    let velocity2 = document.querySelector('#velocity2').value;

    let vel1 = parseInt(velocity1);
    let vel2 = parseFloat(velocity2)

    if (vel1 > vel2) {
        document.querySelector('#output').innerHTML = car1 + ' com ' + velocity1 + 'km/h está andando mais rápido.';
    } else if (vel1 === vel2) {
        document.querySelector('#output').innerHTML = car1 + ' e ' + car2 + (' estão na mesma velocidade');
    } else {
        document.querySelector('#output').innerHTML = car2 + ' com ' + velocity2 + 'km/h está andando mais rápido.';
    }

}