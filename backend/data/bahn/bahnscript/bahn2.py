import json, psycopg2
filename = "plankgeo_data.json"
def trains(filename):
	con = psycopg2.connect(database='appartmapp', user='postgres') 
	cur = con.cursor()
	with open(filename, "r") as data:
		json_encoded = json.loads(data.read())
		data.close()
		# print to screen 
		print json_encoded[0]['lat']
		for entry in json_encoded:
			cur.execute("INSERT INTO items(name, type, picture, lat, lng)VALUES(%s, 'dbstop', 'dbstop.jpg', %s, %s)", (entry['id'], entry['lat'], entry['lon']))
		con.commit()
		con.close()
trains(filename)