"use strict"

type SantasList<B extends ReadonlyArray<any>, G extends ReadonlyArray<any>> = [...B, ...G];

type SantasList2<B extends readonly any[], G extends readonly any[]> = [...B, ...G];