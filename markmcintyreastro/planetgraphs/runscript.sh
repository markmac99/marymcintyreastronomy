#!/bin/bash
echo \<font color=\"Red\"\>Observer Location $1 $2\<br\>\</font\> > location.html
echo \<script language=\"javascript\"\> >> location.html
echo     var x = readCookie\(\'PGSessCookie1\'\) >> location.html
echo     if \(\!x\) { document.write\(\'Cookie not set\'\)} >> location.html
echo \</script\> >> location.html

mkdir /var/www/html/markmcintyreastro/planetgraphs/data/$4
./orbitcalcs $1 $2 $3 /var/www/html/markmcintyreastro/planetgraphs/data/$4
