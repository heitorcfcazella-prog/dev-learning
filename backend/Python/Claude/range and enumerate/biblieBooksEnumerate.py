#Crie uma lista de livros bíblicos e use enumerate() 
#para mostrar sua posição na lista.

livros = ["Mateus", "Marcos", "Lucas", "João","Atos", "Romanos", "1Coríntios", "2Coríntios"]
for indice, nome in enumerate(livros, start=1):
  print(f"{indice}° Livro: {nome}")