# Python-Script Deustche Bahn Koordinaten

filename = "plankgeo_data.json"
filename2 = "geodaten.txt"
val = 8236 #last value of id's
werteliste = []
werteliste2= []

def trains(filename):
	with open(filename, "r") as data:
		for werte in data:
			werte = werte.replace("{", "").strip()
			werte = werte.replace("}", "").strip()
			werte = werte.replace('"', '').strip()
			werte = werte.replace("'", "").strip()
			werte = werte.replace("[", "").strip()
			werte = werte.replace("]", "").strip()			
			werte = werte.replace("	", "").strip()			
			werte = werte.replace(",", " ").strip()
			werte = werte.replace("lon:", "").strip()
			werte = werte.replace("lat:", "").strip()			
			werteliste.append(str(werte))

trains(filename)
open(filename2, "w").close()

if __name__ == "__main__":
	with open(filename2, "r+") as empty:
		for daten in werteliste:				
			empty.write(str(daten) + "\n")

class openagain: #Kein schoener Code. Aber er laeuft!

	with open(filename2, "r+") as finish1:
		for main in finish1:
			global val			
			while val >= 0:
				main = main.replace("id:"+str(val)+" ", "")
				val -= 1 			
			werteliste2.append(main + "\n")
	
	open(filename2, "w").close()
	with open(filename2, "w") as full:
		for lines in werteliste2:
			full.write(lines + ",")
	
