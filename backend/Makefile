# convenience makefile to set up the backend

version = 2.7

all: bin/pserve initdb

tests: bin/py.test
	bin/py.test

bin/pserve bin/py.test: bin/python bin/pip setup.py
	bin/pip install zope.sqlalchemy --no-deps -i https://pypi.python.org/simple/
	bin/pip install -e git+https://github.com/stefanw/python-oauth2.git#egg=oauth2
	bin/python setup.py dev
	git submodule update --init
	bin/pip install -e src/*

bin/python bin/pip:
	virtualenv --python=python$(version) .

initdb: name = $(shell bin/python setup.py --name)
initdb: bin/python
	@psql -c "" $(name) 2> /dev/null || createdb $(name) -E utf8 -T template0

clean:
	git clean -fXd

.PHONY: initdb clean tests dist
