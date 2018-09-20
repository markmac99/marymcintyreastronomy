#!/bin/bash
echo \<font color=\"Red\"\>Observer Location $1 $2 $3 \<br\>\</font\> > location.html
mkdir /var/www/html/planetgraphs/data/$4
./orbitcalcs $1 $2 $3 /var/www/html/planetgraphs/data/$4
