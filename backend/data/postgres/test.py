#!/usr/bin/python
# -*- coding: utf-8 -*-

import psycopg2
import sys


con = None

try:
     
    con = psycopg2.connect(database='appartmapp', user='postgres') 
    cur = con.cursor()
    cur.execute('SELECT version()')   
    ver = cur.fetchone()
    cur.execute("DROP TABLE items")
    cur.execute("CREATE TABLE items(id serial PRIMARY KEY, name VARCHAR(40), type VARCHAR(40), picture VARCHAR(40), lat VARCHAR(40), lng VARCHAR(40))")
    con.commit()
    print ver    
    

except psycopg2.DatabaseError, e:
    print 'Error %s' % e    
    sys.exit(1)
    
    
finally:
    
    if con:
        con.close()