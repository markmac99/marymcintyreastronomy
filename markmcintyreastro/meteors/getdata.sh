#!/bin/bash
aws s3 cp s3://mjmm-meteor-uploads . --recursive
mv -f meteorlist.html meteorlist.html.old
ls -1r *.csv | while read i; do echo \<a href=\"$i\"\>$i\</a\>\<br\> >> meteorlist.html ; done
