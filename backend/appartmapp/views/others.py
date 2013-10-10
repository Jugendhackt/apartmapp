from cornice.service import Service
from restbase import path
import psycopg2
import math
search = Service(name='others', path=path('others'), renderer='json')
def distance(p0, p1):
    return math.sqrt((float(p0[0]) - float(p1[0]))**2 + (float(p0[1]) - float(p1[1]))**2)
@search.get(accept='application/json')
def query(request):
	if "lat" in request.GET:
		lat=request.GET["lat"]
	else:
		lat="50.5"
	if "lng" in request.GET:
		lng=request.GET["lng"]
	else:
		lng="10.5"
	if "dist" in request.GET:
		dist=request.GET["dist"]
	else:
		dist="0.1"
	con = psycopg2.connect(database='appartmapp', user='postgres') 
	cur = con.cursor()
	cur.execute('SELECT * from items')
	rows = cur.fetchall()
	result = [(row) for row in rows if (distance((lat, lng), (row[4], row[5])) <= float(dist))]
	return dict(results=result)

