# Break - interrompe completamente o loop
for num in range(10):
  if num == 5:
    break
  print(num)

# Continue - pula para a próxima iteração do loop
for num in range(10):
  if num % 2 == 0:
    continue
  print(num)

# Pass - útil quando você ainda não implementou aquilo
def funcao_futura():
  pass

for i in range(5):
  if i == 3:
    pass
  print(i)