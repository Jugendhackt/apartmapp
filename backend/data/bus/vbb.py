#!/usr/bin/python
# -*- coding: utf-8 -*-

# Python Bus-Skript
import csv

filename = "stops.txt" #Txt-Datei mit den ungeordneten Werten
filename2 = "test.txt" #Leere Txt-Datei (am Ende das Produkt)

def bus(filename):
    with open(filename) as data:
	reader = csv.DictReader(data) #mit csv in ein Dict wandeln
	      
        for zeile in reader:            
		yield [str(zeile['stop_lon'])+ "' : '" + str(zeile['stop_lat']), zeile["stop_name"]]
#Die unwichtigen Daten rausfiltern

if __name__ == "__main__":
	with open(filename2, "w") as test: #Leere Datei öffnen	
		for stop in bus(filename):		
			test.write(str(stop) + "\n") #und mit der Funktion "bus" füllen

class reopening:
	liste = []
	with open(filename2, "r") as reopen: #Datei wieder öffnen
		for daten in reopen:
			daten = daten.replace('"', '').strip() #bereinigen
			daten = daten.replace("'", "").strip()
			daten = daten.replace("[", "").strip()
			daten = daten.replace("]", "").strip()
			liste.append(str(daten)) #als Liste speichern
					
	open(filename2, "w").close() #Datei fromatieren
	with open(filename2, "w") as finish: #Datei öffnen
		for werte in liste: #hierdurch fallen die Listenklammern weg
			finish.write(str(werte) + "\n") #Werte der Liste in Datei schreiben
