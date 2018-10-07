#!/bin/bash
mkdir data/$4

./orbitcalcs $1 $2 $3 data/$4

cd data
find . -type d -mtime +5 | while read i ; do rm -Rf $i ; done
