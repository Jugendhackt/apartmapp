==========
AppartMapp
==========

``appartmapp`` Appartmapp ist eine Plattform, auf der du deine neue Wohnung, dein neues Haus etc. nach ganz besonderen Kriteren, wie z.B. Internetanschluss, Bus- / Bahnanbindung, Schulen und Kindergärten in der Nähe und vielen mehr finden kannst und im Rahmen von `2013 Jugend Hackt <http://hacks.youngrewiredstate.org/events/yrsberlin>`_ entstanden. 

Die Anwendung ist als client/server ausgelegt. Der Server ist in Python geschrieben mit Hilfe des `Pyramid  frameworks <http://docs.pylonsproject.org/projects/pyramid/en/1.4-branch/>`_ und spricht fliessend REST.

Der Client ist eine Javascript Anwendung, die auf das `AngularJS framework <http://angularjs.org>`_ zurückgreift.


============
Installation
============

Um an der Anwendung mitzuarbeiten, erstmal das Projekt mit git clonen.

Frontend
--------

Fuer das Frontend werden nodejs (mit npm) benoetigt. Dann muss mit ``npm`` folgendes global installiert werden::

	$ npm install -g grunt-cli grunt bower

Danch kann im ``frontend`` Verzeichnis ``make`` aufgerufen werden::

	$ cd frontend
	$ make

Jetzt kann die Application mit ``grunt server`` gestartet werden.

Die Angular Anwendung wurde mit `yeoman <http://yeoman.io>`_ erstellt und die damit erzeugte Struktur ist auf `dieser Seite <https://github.com/yeoman/generator-angular>`_ ganz gut dokumentiert.
