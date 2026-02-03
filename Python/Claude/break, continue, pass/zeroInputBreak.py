# Peça números ao usuário até 
# que ele digite 0 (use break).

while True:
  num = int(input("Digite um número: "))
  if num == 0:
    break
  print(num)