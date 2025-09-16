#!/bin/bash

SPRING_PID=$(pgrep -f stswebjpa-0.0.1-SNAPSHOT.jar)


echo $SPRING_PID
echo $SPRING_PATH

if [ -z "$SPRING_PID" ]; then
    echo "스프링이 종료된 상태"
    echo "스프링 재시작 -$(date)" 1>> /home/ohs942230/stswebjpa/spring-restart.log
    echo "1234" | nohup sudo -S java -jar $SPRING_PATH 1> /home/ohs942230/stswebjpa/log.out 2> /home/ohs942230/stswebjpa/err.log
else
    echo "스프링이 시작된 상태"
fi