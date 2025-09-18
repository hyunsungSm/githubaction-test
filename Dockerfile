# 최신 nginx 이미지 사용
FROM nginx:latest

# nginx 기본 문서 루트는 /usr/share/nginx/html
# 기존 내용 삭제 (선택 사항)
RUN rm -rf /usr/share/nginx/html/*

# project 디렉토리를 컨테이너 내부 html 위치로 복사
COPY project /usr/share/nginx/html

# nginx는 기본적으로 포트 80을 LISTEN 하므로 그대로 사용
EXPOSE 80
