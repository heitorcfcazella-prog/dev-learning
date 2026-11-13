classe_personagem = str(input('Qual a sua classe? Guerreiro, Mago ou Arqueiro?'))
vida = int(50)
atq = int(0)
defesa = int(0)

if classe_personagem == ('Guerreiro'):
    atq = int(20)
    defesa = int(20)
elif classe_personagem == ('Mago'):
    atq = int(15)
    defesa = int(10)
elif classe_personagem == ('Arqueiro'):
    atq = int(20)
    defesa = int(15)
else:
    print('Classe inválida')
    exit()

#Goblin código: 
vida_goblin = int(30)
atq_goblin = int(10)
def_goblin = int(20)

print('Você acho um goblin, o que você faz?')
resp1 = str(input('Atacar ou fugir'))

if resp1 == ('Atacar') and def_goblin <= atq:
    print('O goblin foi morto')

elif resp1 == ('Atacar') and def_goblin > atq:
    print('Ele ainda está vivo')
    vida_goblin = (vida_goblin - atq)
    print(f'A vida do goblin é {vida_goblin}')

    resp2 = str(input('O que você faz agora? Ataca ou foge?'))
    if resp2 == ('Atacar') and (def_goblin <= atq or vida_goblin <= atq):
        print('O goblin foi morto')

if resp1 == ('Fugir'):
    print('Você fugiu sem ser notado')
