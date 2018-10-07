#!/bin/bash
cd `dirname $0`
./cometpp ./CometEls.txt ./VisCometEls.txt `dirname $0`
./pgsummary ./CometEls.txt ./data/planetpositions.js `dirname $0`
