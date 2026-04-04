import plotly.express as px

dados = {"Frutas": ["Maçã", "Banana", "Uva"], "Quantidade": [10, 15, 20]}
fig = px.bar(dados, x="Frutas", y="Quantidade", title="Consumo de Frutas")
fig.show()