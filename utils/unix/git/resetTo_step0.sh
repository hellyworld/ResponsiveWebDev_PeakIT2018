#!/bin/bash
git checkout step0 && git fetch && git clean -f && git clean -fd && git reset --hard HEAD  && git pull
