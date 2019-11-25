#!/bin/bash
cd `dirname $0`
aws s3 cp s3://mjmm-meteor-uploads . --recursive
mv -f meteorlist.html meteorlist.html.old
mv -f radiolist.html radiolist.html.old
mkdir radio
ls -1r *.csv | while read i; do echo \<a href=\"$i\"\>$i\</a\>\<br\> >> meteorlist.html ; done
echo \<b\>This Months Heatmap - last refreshed `date '+%Y-%m-%d %H:%M:%S'` UT\</b\>\<br\> >> radiolist.html
echo \<a href=\"radio/RMOB_latest.jpg\"\>\<img src=\"radio/RMOB_latest.jpg\"\ width=470\>\</a\>\<br\> >> radiolist.html
echo \<b\>Live screenshot - last refreshed `date '+%Y-%m-%d %H:%M:%S'` UT\</b\>\<br\> >> radiolist.html
echo \<a href=\"radio/latest2d.jpg\"\>\<img src=\"radio/latest2d.jpg\"\ width=470\>\</a\>\<br\> >> radiolist.html
echo \<b\>Latest radio meteor capture\</b\>\<br\> >> radiolist.html
echo \<a href=\"radio/latestcapture.jpg\"\>\<img src=\"radio/latestcapture.jpg\"\ width=470\>\</a\>\<br\> >> radiolist.html
