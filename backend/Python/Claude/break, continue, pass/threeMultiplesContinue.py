# Imprima números de 1 a 20, 
# mas pule os múltiplos de 3 (use continue).

for num in range(21):
  if num % 3 == 0:
    continue
  print(num)