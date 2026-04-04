import pandas as pd

dados = {"Nome": ["Ana", "Bruno", "Carlos"], "Idade": [23, 30, 25]}
df = pd.DataFrame(dados)       # cria tabela
print(df.head())               # primeiras linhas
print(df["Idade"].mean())      # média da coluna
print(df[df["Idade"] > 24])    # filtro

dados1 = {"Nome": ["Ana", "Bruno", "Carlos", "Daniel", "Eduardo"], "Idades": [14, 16, 13, 12, 17], "Notas": [9, 8, 5, 6, 3]}

df1 = pd.DataFrame(dados1)
print(df1.head())
print(df1[df1["Notas"] > 7])
print(df1["Idades"])