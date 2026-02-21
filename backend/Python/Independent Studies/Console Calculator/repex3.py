while True:
  print("\n=== MENU PRINCIPAL ===\n1 - Olá\n2 - Tchau\n3 - Mostrar frase\n4 - Sair")
  opcao = input("Escolha uma opção: ")

  if opcao == "1":
    print("Olá! Bom dia")
  elif opcao == "2":
    print("Tchau! Até a próxima")
  elif opcao == "3":
    print("Nunca desista dos seus sonhos, mesmo que pareçam distantes!")
  elif opcao == "4":
    print("Encerrando...")
    break
  else:
    print("Erro!")