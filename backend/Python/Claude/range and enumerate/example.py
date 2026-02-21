# range() gera uma sequência de números, muito útil em loops
#enumerate() percorre uma sequência retornando tanto o 
#índice quanto o valor

#range
for i in range(5):
  print(i)

for i in range (2, 10, 2): #Onde começa, termina e quanto aumenta de um para o outro
  print(i)

#enumerate
santos = ["Pedro", "Paulo", "João"]
for indice, nome in enumerate(santos):
  print(f"{indice}: {nome}")

for indice, nome in enumerate(santos, start=1):
  print(f"{indice}° santo: {nome}")