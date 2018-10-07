#!/bin/bash
cd /var/www/html/markmcintyreastro/planetgraphs
./cometpp ./CometEls.txt ./VisCometEls.txt /var/www/html/markmcintyreastro/planetgraphs
./pgsummary ./CometEls.txt ./data/planetpositions.js /var/www/html/markmcintyreastro/planetgraphs
