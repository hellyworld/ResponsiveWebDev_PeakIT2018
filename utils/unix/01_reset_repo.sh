#!/bin/bash
git checkout master && git fetch && git clean -f && git clean -fd && git reset --hard HEAD  && git pull