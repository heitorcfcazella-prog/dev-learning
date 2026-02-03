# Listas são coleções ordenadas e mutáveis 
# que podem conter qualquer tipo de dado.

apostolos = ["Pedro", "João", "Tiago"]

apostolos.append("André") #adiciona
print(apostolos)

apostolos.insert(1, "Mateus")
apostolos.remove("Tiago")

ultimo = apostolos.pop()
apostolos.reverse()

print(len(apostolos))
print(apostolos.count("Pedro"))
print(apostolos.index("João"))

apostolos.clear()