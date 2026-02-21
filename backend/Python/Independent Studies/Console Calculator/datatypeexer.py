# 1. Peça dois números e mostre a soma.

# 2. Mostre o produto de dois números.

# 3. Peça idade e mostre quantos anos terá daqui a 10 anos.

n1 = float(input("Digite um número"))
n2 = float(input("Digite outro número"))
soma = n1 + n2
prod = n1*n2
print("Soma: ", soma)
print("Produto: ", prod)

id = int(input("Quantos anos você tem? "))
id10 = id + 10
print("Você terá ", id10, "daqui a dez anos")