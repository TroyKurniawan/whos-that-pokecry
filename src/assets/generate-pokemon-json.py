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

            # ========================
            # === Write JSON entry ===
            # ========================

            line = line.strip()
            w_file.write("  {\n")
            w_file.write("    " + "\"id\": \"" + str(i) + "\",\n")

            # Write edge case for Nidoran ♂ and ♀ and Flabebe
            if i == 29:      w_file.write("    " + "\"name\": \"" + "Nidoran♀" + "\",\n")
            elif i == 32:    w_file.write("    " + "\"name\": \"" + "Nidoran♂" + "\",\n")
            elif i == 669:   w_file.write("    " + "\"name\": \"" + "Flabébé" + "\",\n")
            else:            w_file.write("    " + "\"name\": \"" + line + "\",\n")

            # Sprite
            w_file.write("    " + "\"sprite\": \"" + "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + str(i) + ".png" + "\",\n")

            # Latest Cry
            w_file.write("    " + "\"latest_cry\": \"" + "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/" + str(i) + ".ogg" + "\",\n")

            # Legacy Cry - Pokemon from Gen 6 and above (#650 = Chespin) do not have legacy cries
            if i < 650:
                w_file.write("    " + "\"legacy_cry\": \"" + "https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/legacy/" + str(i) + ".ogg" + "\",\n")
            else:
                w_file.write("    " + "\"legacy_cry\": \"" + "\",\n")

            # mp3 Cry: Replace or remove characters that aren't needed for the mp3 cry link
            line = line.replace(" ", "")    #spaces
            line = line.replace("-", "")    #dashes
            line = line.replace(".", "")    #periods
            line = line.replace(":", "")    #colons
            line = line.replace("'", "")    #apostrophe
            line = line.replace("é", "e")   #é
            line = line.lower()             #lowercase

            if i == 29:     line = "nidoranf"
            elif i == 32:     line = "nidoranm"
            elif i == 669:     line = "flabebe"

            w_file.write("    " + "\"mp3_cry\": \"" + "https://play.pokemonshowdown.com/audio/cries/" + line + ".mp3" + "\",\n")

            w_file.write("  },\n")

            # Increment "i"
            i = i + 1

print("") 
print("================") 
print("WRITING COMPLETE")
print("================") 
print("") 
