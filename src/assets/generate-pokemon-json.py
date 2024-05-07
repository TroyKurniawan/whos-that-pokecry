# Specify the file name
write_file = "./src/assets/pokemon-list.js"
read_file = "./src/assets/pokemon-list.txt"

# Open the file in write mode and write the text
with open(write_file, 'w', errors='ignore') as w_file:
    with open(read_file, 'r', errors='ignore', encoding='cp1252') as r_file:
        w_file.write("export const PokemonList = [\n")

        # Index "i" for ID number
        i = 1

        # Loop until "line" is empty
        while True:

            # Read line by line
            line = r_file.readline()

            # Break loop
            if not line:
                w_file.write("]")
                break

            # Write JSON entry
            line = line.strip()
            w_file.write("  {\n")
            w_file.write("    " + "\"id\": \"" + str(i) + "\",\n")
            w_file.write("    " + "\"name\": \"" + line + "\",\n")
            w_file.write("    " + "\"sprite\": \"" + "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + str(i) + ".png" + "\",\n")
            w_file.write("  },\n")

            # Increment "i"
            i = i + 1

print("Text has been written to", write_file.")
