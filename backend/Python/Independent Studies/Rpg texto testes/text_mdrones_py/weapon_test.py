forca_arma = int(0)
armadura = int(0)
escudo = int(0)
velocidade_disparo = float(0)

print("Escolha uma arma: ")
resp1 = str(input('Rifle ou Metralhadora '))
if resp1 == ('Rifle'):
    forca_arma = int(15)
    velocidade_disparo = float(1.5)
elif resp1 == ('Metralhadora'):
    forca_arma = int(10)
    velocidade_disparo = float(0.5)

print('Agora escolha uma armadura: ')
resp2 = str(input('Templária ou Tanque? '))
if resp2 == ('Templária'):
    armadura = int(15)
    escudo = int(10)
    resistencia = int(armadura + escudo)
elif resp2 == ('Tanque'):
    armadura = int(25)
    escudo = int(15)
    resistencia = int(armadura + escudo)

vida = (int(50) + resistencia)

print('Essas são as suas estatisticas: ')
print(f'Vida: {vida}')
print(f'Força da arma: {forca_arma}')
print(f'Velocidade de disparo: {velocidade_disparo}')
print(f'Armadura: {armadura}')
print(f'Escudo: {escudo}')
print(f'Resistência: {resistencia}')