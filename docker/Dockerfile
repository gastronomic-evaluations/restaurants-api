FROM node

ENV LC_ALL=C.UTF-8 \
    LANG=en_US.UTF-8 \
    LANGUAGE=en_US.UTF-8 \
    TZ=America/Sao_Paulo

WORKDIR /api

USER node

ENTRYPOINT ["/api/docker/entrypoint.sh"]

EXPOSE 5000

CMD ["npm", "run", "start"]
