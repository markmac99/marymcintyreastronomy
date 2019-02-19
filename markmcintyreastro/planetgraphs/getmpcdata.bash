#!/bin/bash
cd /var/www/html/markmcintyreastro/planetgraphs
wget -O ./CometEls.txt http://www.minorplanetcenter.net/iau/MPCORB/CometEls.txt
wget -O ./tmpfile.gz http://www.minorplanetcenter.net/iau/MPCORB/MPCORB.DAT.gz
EXITVAL=$?
if [ $EXITVAL -eq 0 ]
then
  gunzip tmpfile.gz
  mv MPCORB.DAT MPCORB.DAT.prev
  mv tmpfile MPCORB.DAT
  exit 0
else
  exit $EXITVAL
fi
