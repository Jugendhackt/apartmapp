import json
import sys
from appartmapp.immoscoutapi import sanitize_is24, ImmoScout24Api


if __name__ == '__main__':
    (IMMOSCOUT_REST_KEY, IMMOSCOUT_REST_SECRET, IMMOSCOUT_ACCESS_TOKEN,
        IMMOSCOUT_ACCESS_TOKEN_SECRET) = sys.argv[1:]
    is24 = ImmoScout24Api({
        'consumer_key': IMMOSCOUT_REST_KEY,
        'consumer_secret': IMMOSCOUT_REST_SECRET,
        'access_token': IMMOSCOUT_ACCESS_TOKEN,
        'access_secret': IMMOSCOUT_ACCESS_TOKEN_SECRET
    })
    result = is24.radius_search('apartmentrent', '51.5','10.5','500')
    result = result['resultlist.resultlist']['resultlistEntries'][0]['resultlistEntry']
    result = [sanitize_is24(item) for item in result]
    print(json.dumps(result, indent=4))

