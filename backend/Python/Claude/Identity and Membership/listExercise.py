#Crie duas variáveis com listas idênticas e verifique se
#são o mesmo objeto.
#Depois , faça uma receber a outra e teste novamente

a = [2, 4, 6, 8]
b = [2, 4, 6, 8]

print(a is b)

a = b
print(a is b)