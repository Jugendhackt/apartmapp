from cornice.service import Service

from appartmapp.immoscoutapi import sanitize_is24
from restbase import path

search = Service(name='search', path=path('search'), renderer='json')

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
	results = request.registry['is24api'].radius_search('apartmentrent', lat, lng, '500')
	results = results['resultlist.resultlist']['resultlistEntries'][0]['resultlistEntry']
	results = [sanitize_is24(item) for item in results]
	#import pdb; pdb.set_trace()
	return dict(results=results)