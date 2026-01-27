def somar(a, b):
  return a + b

print(somar(3, 5))

try:
  num = float(input("Digite um número: "))
except ValueError:
  print("Isso não é um número!")