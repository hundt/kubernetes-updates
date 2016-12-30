url=`./minikube service a-b --url`
while true; do
    d=`date`; curl $url
    echo " -" $d
    sleep 0.1
done
