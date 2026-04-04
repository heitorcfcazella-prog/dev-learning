

#x = [1, 2, 3, 4, 5, 6]
#y = [2 , 4, 1, 8, 9, 11]

#plt.plot(x, y, marker='o') #grafico de linha
#plt.title("Exemplo de linha")
#plt.show()
import matplotlib.pyplot as plt
import numpy as np


eixox = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
eixoy = np.sqrt(eixox)

plt.plot(eixox, eixoy, marker='o', color='red') #grafico de linha
plt.title("Exemplo de linha")
plt.xlabel("Eixo X")
plt.ylabel("Eixo Y")
plt.show()