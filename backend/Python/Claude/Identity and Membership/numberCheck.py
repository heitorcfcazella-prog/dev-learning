#Crie uma lista de números e peça ao usuário um número.
#Verifique se esse número está na lista.

paresDe0a10 = [0, 2, 4, 6, 8, 10]
numeroUsuario = int(input("Diga um número de 0 a 10: "))

print(numeroUsuario in paresDe0a10)