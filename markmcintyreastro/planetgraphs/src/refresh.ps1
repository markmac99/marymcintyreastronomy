xcopy /srdy ..\..\..\..\planetgraphs\OrbitCalcs\OrbitCalcs\*.h .
xcopy /srdy ..\..\..\..\planetgraphs\OrbitCalcs\OrbitCalcs\*.cpp .
xcopy /srdy ..\..\..\..\planetgraphs\OrbitCalcs\ConjunctionCalculator\*.cpp .
$oldpath=$env:path
$env:Path += ';C:\Program Files (x86)\cwRsync\bin'
rsync -avz -e "ssh -i c:\users\mark\documents\projects\aws\markskey.pem" *.h ec2-user@ec2-18-130-54-182.eu-west-2.compute.amazonaws.com:/var/www/html/markmcintyreastro/planetgraphs/src
rsync -avz -e "ssh -i c:\users\mark\documents\projects\aws\markskey.pem" *.cpp ec2-user@ec2-18-130-54-182.eu-west-2.compute.amazonaws.com:/var/www/html/markmcintyreastro/planetgraphs/src
$env:Path=$oldpath