from cornice.service import Service
from restbase import path
import psycopg2
search = Service(name='others', path=path('others'), renderer='json')

@search.get(accept='application/json')
def query(request):
	con = psycopg2.connect(database='appartmapp', user='postgres') 
	cur = con.cursor()
	cur.execute('SELECT * from items')
	rows = cur.fetchall()
	results = [(row) for row in rows]
	return dict(results=results)

