def somar(a, b): return a + b
def subtracao(a, b): return a - b
def multiplicacao(a, b): return a * b
def divisao(a, b): return a / b if b != 0 else print("Erro: divisão por zero")

print("===== CALCULADORA =====")
a = float(input("Qual o primeiro número? "))
b = float(input("Qual o segundo número? "))
op = input("Qual operação você quer?\n1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\nEscolha: ")

if op == "1":
  print(f"O resultado é: {somar(a, b)}")
elif op == "2":
  print(f"O resultado é: {subtracao(a, b)}")
elif op == "3":
  print(f"O resultado é: {multiplicacao(a, b)}")
elif op == "4":
  print(f"O resultado é: {divisao(a, b)}")
else:
  print("Erro!")