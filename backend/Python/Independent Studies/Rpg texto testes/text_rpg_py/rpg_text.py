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

print(f'Sua classe é: {classe_personagem}')
print(f'Sua vida é: {vida}')
print(f'Seu ataque é: {atq}')
print(f'Sua defesa é: {defesa}')

iniciar = str(input('Começar jogo?'))

if iniciar == ('Sim'):
    print('Iniciando')
    print('Você é um aventureiro que acaba de chegar ao vilarejo de Eldoria, assolado por criaturas das trevas.')  
    print('O rei oferece uma recompensa a quem derrotar o temível Dragão Sombrio, escondido nas cavernas do Monte Azrath.')
    print('Antes de enfrentar a fera, você precisará reunir aliados, explorar masmorras e encontrar a Lança Sagrada.')  
    print('Seu destino está nas suas mãos. Escolha sabiamente e embarque nessa jornada épica!')
elif iniciar == ('Não'):
    print('Ok, volte outra hora')
