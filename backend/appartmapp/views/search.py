from cornice.service import Service

from appartmapp.immoscoutapi import sanitize_is24
from restbase import path

search = Service(name='search', path=path('search'), renderer='json')

@search.get(accept='application/json')
def query(request):
	results = request.is24api.radius_search('apartmentrent', '51.5','10.5','500')
	results = results['resultlist.resultlist']['resultlistEntries'][0]['resultlistEntry']
	results = [sanitize_is24(item) for item in results]
	return dict(results=results)

