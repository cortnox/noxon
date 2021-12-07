PROGRAM=noxon

#GITHUB
GITMSG="1st commit"
GIT=cortnox
GITURL="github.com"

HOST=0.0.0.0
PORT=3000

start:
	npm start
build:
	npm build

note:
	echo "# $(PROGRAM)" >> README.md

init:
	git init

add:
	git add .

commit:
	git commit -m $(GITMSG)

branch:
	git branch -M main

remote:
	git remote add origin https://$(GITURL)/$(GIT)/$(PROGRAM).git

push:
	git push -u origin main

