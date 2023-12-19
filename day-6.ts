"use strict"

type FilterChildrenBy<Status, T> = Status extends T ? never : Status;