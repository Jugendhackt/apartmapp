# module for project-specific development
# please rename and start hacking...

from transaction import commit
from restbase import configure as base_configure, db_setup
from appartmapp.immoscoutapi import ImmoScout24Api


project_name = 'appartmapp'

def is24api(request):
    settings = request.registry.settings
    return ImmoScout24Api(auth=dict(
        consumer_key=settings['is24.consumer_key'],
        consumer_secret=settings['is24.consumer_secret'],
        access_token=settings['is24.access_token'],
        access_secret=settings['is24.access_secret'],
        ),
        domain='http://rest.immobilienscout24.de',
    )


def configure(global_config, **settings):
    config = base_configure(global_config, **settings)
    # add additional configuration here...
    config.scan()

    config.set_request_property(is24api, name="is24api", reify=True)
    config.commit()
    return config


def main(global_config, **settings):
    config = configure(global_config, **settings)
    db_setup(**settings)
    commit()
    return config.make_wsgi_app()
