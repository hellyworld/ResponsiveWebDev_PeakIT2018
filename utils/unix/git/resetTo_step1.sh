#!/bin/bash
git fetch && git clean -f && git clean -fd && git reset --hard HEAD  && git pull && git checkout step1
