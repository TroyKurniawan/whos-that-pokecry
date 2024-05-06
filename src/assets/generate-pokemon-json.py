# Specify the file name
write_file = "./src/assets/pokemon-list.js"
read_file = "./src/assets/pokemon-list.txt"

# Open the file in write mode and write the text
with open(write_file, 'w', errors='ignore') as w_file:
    with open(read_file, 'r', errors='ignore', encoding='cp1252') as r_file:
        w_file.write("export const PokemonList = [\n")
        i = 1
        while True:
            line = r_file.readline()

            if not line:
                w_file.write("]")
                break

            line = line.strip()
            w_file.write("  {\n")
            w_file.write("    " + "\"name\": \"" + line + "\",\n")
            w_file.write("    " + "\"sprite\": \"" + "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + str(i) + ".png" + "\",\n")
            w_file.write("  },\n")
            i = i + 1

print("Text has been written to", write_file)
