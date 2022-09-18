function update() {
    let player1 = document.querySelector('#player1').value;
    let atackPoints = document.querySelector('#atackPoints').value;
    let player2 = document.querySelector('#player2').value;
    let defensePoints = document.querySelector('#defensePoints').value;
    let health = document.querySelector('#health').value
    let shield = document.querySelector('input[name="shield"]:checked').value;

    let half_damage = health - (atackPoints - defensePoints);
    let half_damageShield = health - (50 / 100) * half_damage;

    if (atackPoints > defensePoints && shield === 'activated') {
        document.querySelector('#output').innerHTML = player1 + ' Ataque: ' + atackPoints + ' <br /> ' + player2 + ' Defesa: ' + defensePoints + ' | Pontos de Vida: ' + health;
        document.querySelector('#output2').innerHTML = player2 + ' Escudo ativado, pontos de vidas restante: ' + half_damageShield;
    } else if (atackPoints > defensePoints && shield === 'disabled') {
        document.querySelector('#output').innerHTML = player1 + ' Ataque: ' + atackPoints + ' <br /> ' + player2 + ' Defesa: ' + defensePoints + ' | Pontos de Vida: ' + health;
        document.querySelector('#output2').innerHTML = player2 + ' Escudo desativado, pontos de vidas restante: ' + half_damage;
    } else if (atackPoints === defensePoints) {
        document.querySelector('#output').innerHTML = player1 + ' Ataque: ' + atackPoints + ' <br /> ' + player2 + ' Defesa: ' + defensePoints + ' | Pontos de Vida: ' + health;
        document.querySelector('#output2').innerHTML = 'Ataque e defesa Empatados: Dano 0';
    } else if (atackPoints < defensePoints) {
        document.querySelector('#output').innerHTML = player1 + ' Ataque: ' + atackPoints + ' <br /> ' + player2 + ' Defesa: ' + defensePoints + ' | Pontos de Vida: ' + health;
        document.querySelector('#output2').innerHTML = 'Ataque menor que a defesa: Dano 0';
    };

};