#!/usr/bin/env node
import { game } from '../src/index.js'
import { greetings } from '../src/cli.js'
import { showConditions, askQuestion, checkAnswer } from '../src/games/even.js'

game(greetings, showConditions, askQuestion, checkAnswer)
