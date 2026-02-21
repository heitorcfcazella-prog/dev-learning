# Identidade verifica se dois objetos ocupam o mesmo
# espaço na memória, ou seja, se são o mesmo objeto (is, is not)
# Pertinência verifica se um elemento está contido em uma
# sequência (in, not in)

a = [1, 2, 3]
b = a
c = [1, 2, 3]

print(a is b)
print(a is c)
print(a == c)

frutas = ["maçã", "banana", "laranja"]
print("maçã" in frutas)
print("uva" not in frutas)

texto = "Python é incrivel"
print("Python" in texto)
