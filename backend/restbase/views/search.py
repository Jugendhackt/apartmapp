from cornice.service import Service

from .. import path

search = Service(name='search', path=path('search'), renderer='json')

@search.get(accept='application/json')
def query(request):
	return dict(results=['foo', 'bar'])

