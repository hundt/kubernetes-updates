url=`./minikube service rolling --url`
while true; do
	d=`date`
	r=`kubectl get rs -l run=rolling -o go-template --template='{{range .items}}{{if .status.availableReplicas}}{{(index .spec.template.spec.containers 0).image}}={{.status.availableReplicas}} {{end}}{{end}}'`
	curl $url
	echo " -" $d - available replicas: $r
done
