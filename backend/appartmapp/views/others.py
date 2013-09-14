from cornice.service import Service
from restbase import path
import psycopg2
search = Service(name='others', path=path('others'), renderer='json')

@search.get(accept='application/json')
def query(request):
	firstLong = 51.5
	firstLat = 10.5
	con = psycopg2.connect(database='appartmapp', user='postgres') 
	cur = con.cursor()
	cur.execute('SELECT * from items')
	rows = cur.fetchall()
	results = [(row) for row in rows if abs(float(row[4]) - firstLat)<10 and abs(float(row[5]) - firstLong)<20]
	return dict(results=results)

